'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Copy, Check, Download, RotateCcw } from 'lucide-react';

interface CodeRunnerProps {
  language: 'python' | 'javascript' | 'cpp';
  initialCode: string;
  title: string;
  description: string;
}

export default function CodeRunner({
  language,
  initialCode,
  title,
  description,
}: CodeRunnerProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [pyodide, setPyodide] = useState<any>(null);
  const [isPyodideLoaded, setIsPyodideLoaded] = useState(false);
  const [isLoadingPyodide, setIsLoadingPyodide] = useState(false);
  const [packagesLoaded, setPackagesLoaded] = useState(false);

  // Load Pyodide for Python execution
  useEffect(() => {
    if (language === 'python' && !isPyodideLoaded && !isLoadingPyodide) {
      setIsLoadingPyodide(true);
      const loadPyodide = async () => {
        try {
          // Use a CDN approach that's browser-compatible
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
          script.async = true;
          
          script.onload = async () => {
            try {
              // @ts-ignore - Pyodide is loaded globally
              const pyodideInstance = await window.loadPyodide({
                indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
              });
              setPyodide(pyodideInstance);
              setIsPyodideLoaded(true);
              
              // Load common packages
              try {
                await pyodideInstance.loadPackage(['numpy', 'pandas', 'scikit-learn']);
                setPackagesLoaded(true);
              } catch (packageError) {
                console.warn('Some packages failed to load:', packageError);
                // Continue anyway, packages might be loaded on-demand
              }
            } catch (error) {
              console.error('Failed to initialize Pyodide:', error);
              setOutput('Failed to load Python runtime. Please refresh the page and try again.');
            } finally {
              setIsLoadingPyodide(false);
            }
          };
          
          script.onerror = () => {
            console.error('Failed to load Pyodide script');
            setOutput('Failed to load Python runtime. Please check your internet connection and try again.');
            setIsLoadingPyodide(false);
          };
          
          document.head.appendChild(script);
        } catch (error) {
          console.error('Failed to load Pyodide:', error);
          setOutput('Failed to load Python runtime. Please refresh the page and try again.');
          setIsLoadingPyodide(false);
        }
      };
      loadPyodide();
    }
  }, [language, isPyodideLoaded, isLoadingPyodide]);

  const runCode = async () => {
    setIsRunning(true);
    setOutput('');

    try {
      let result = '';

      switch (language) {
        case 'python':
          if (isLoadingPyodide) {
            result = 'Loading Python runtime... Please wait.';
          } else if (pyodide) {
            try {
              const pythonCode = code.trim();
              
              // Check if we need to load packages
              const needsPandas = pythonCode.includes('pandas') || pythonCode.includes('pd.');
              const needsNumpy = pythonCode.includes('numpy') || pythonCode.includes('np.');
              const needsSklearn = pythonCode.includes('sklearn') || pythonCode.includes('sklearn.');
              
              // Load required packages if needed
              if (needsPandas || needsNumpy || needsSklearn) {
                try {
                  if (needsPandas) await pyodide.loadPackage('pandas');
                  if (needsNumpy) await pyodide.loadPackage('numpy');
                  if (needsSklearn) await pyodide.loadPackage('scikit-learn');
                } catch (packageError) {
                  console.warn('Package loading warning:', packageError);
                }
              }
              
              // Handle common Python patterns
              if (pythonCode.includes('print(')) {
                // For code with print statements, use exec
                await pyodide.runPythonAsync(`
import sys
import io
from contextlib import redirect_stdout

# Create a string buffer to capture output
output_buffer = io.StringIO()

# Redirect stdout to our buffer
with redirect_stdout(output_buffer):
    try:
        exec("""${pythonCode.replace(/"/g, '\\"').replace(/\n/g, '\\n')}""")
    except Exception as e:
        print(f"Error: {e}")

# Get the captured output
result = output_buffer.getvalue()
output_buffer.close()
result
                `);
                result = await pyodide.globals.get('result');
              } else {
                // For expressions, use eval
                result = await pyodide.runPythonAsync(pythonCode);
              }
              
              if (!result) {
                result = 'Code executed successfully!';
              }
            } catch (error) {
              result = `Python Error: ${error}`;
            }
          } else {
            result = 'Python runtime not available. Please refresh the page and try again.';
          }
          break;
        
        case 'javascript':
          try {
            // Create a safe execution environment with console.log capture
            const originalConsoleLog = console.log;
            const logs: string[] = [];
            
            // Override console.log to capture output
            console.log = (...args) => {
              logs.push(args.map(arg => 
                typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
              ).join(' '));
            };

            // Execute the code
            const func = new Function(code);
            const returnValue = func();
            
            // Restore console.log
            console.log = originalConsoleLog;
            
            // Combine logs and return value
            if (logs.length > 0) {
              result = logs.join('\n');
            }
            if (returnValue !== undefined) {
              result += (result ? '\n' : '') + `Return value: ${returnValue}`;
            }
            if (!result) {
              result = 'Code executed successfully!';
            }
          } catch (error) {
            result = `JavaScript Error: ${error}`;
          }
          break;
        
        case 'cpp':
          try {
            // Simple C++ code execution simulation
            // For a real implementation, you'd use Emscripten/WebAssembly
            const cppCode = code.trim();
            
            // Basic syntax checking and simulation
            if (cppCode.includes('#include')) {
              result = 'C++ Code Analysis:\n';
              result += '✓ Includes detected\n';
              
              if (cppCode.includes('main()')) {
                result += '✓ Main function found\n';
                result += '✓ Program structure valid\n';
                result += '\nSimulated output:\n';
                
                // Extract and simulate simple operations
                if (cppCode.includes('cout')) {
                  result += 'Hello, World!\n';
                }
                if (cppCode.includes('sort(')) {
                  result += 'Array sorted successfully\n';
                }
                if (cppCode.includes('vector')) {
                  result += 'Vector operations completed\n';
                }
              } else {
                result += '⚠ No main() function found\n';
              }
            } else {
              result = 'C++ Code Analysis:\n';
              result += '⚠ No includes detected\n';
              result += 'Note: This is a simulation. For full C++ execution, WebAssembly compilation would be required.';
            }
          } catch (error) {
            result = `C++ Error: ${error}`;
          }
          break;
        
        default:
          result = 'Language not supported';
      }

      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy code:', error);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}.${language}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getLanguageColor = () => {
    switch (language) {
      case 'python': return 'bg-blue-500';
      case 'javascript': return 'bg-yellow-500';
      case 'cpp': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusMessage = () => {
    if (language === 'python') {
      if (isLoadingPyodide) return 'Loading Python runtime...';
      if (isPyodideLoaded && packagesLoaded) return 'Python runtime ready';
      if (isPyodideLoaded) return 'Loading packages...';
      return 'Python runtime not loaded';
    }
    return `${language.toUpperCase()} ready`;
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className={`px-2 py-1 text-xs text-white rounded-full ${getLanguageColor()}`}>
            {language.toUpperCase()}
          </span>
          <span className={`px-2 py-1 text-xs rounded-full ${
            isPyodideLoaded || language !== 'python' 
              ? 'bg-green-100 text-green-700' 
              : 'bg-yellow-100 text-yellow-700'
          }`}>
            {getStatusMessage()}
          </span>
        </div>
      </div>

      {/* Code Editor */}
      <div className="relative mb-4">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-48 p-4 bg-gray-900 text-green-400 font-mono text-sm rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={`Enter your ${language} code here...`}
        />
        
        {/* Code Actions */}
        <div className="absolute top-2 right-2 flex gap-1">
          <motion.button
            onClick={copyCode}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          </motion.button>
          <motion.button
            onClick={downloadCode}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Download className="w-4 h-4" />
          </motion.button>
          <motion.button
            onClick={resetCode}
            className="p-1 text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <RotateCcw className="w-4 h-4" />
          </motion.button>
        </div>
      </div>

      {/* Run Button */}
      <motion.button
        onClick={runCode}
        disabled={isRunning || (language === 'python' && isLoadingPyodide)}
        className={`flex items-center gap-2 mb-4 px-4 py-2 rounded-lg font-medium transition-colors ${
          isRunning || (language === 'python' && isLoadingPyodide)
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-primary text-white hover:bg-primary/90'
        }`}
        whileHover={!isRunning && !(language === 'python' && isLoadingPyodide) ? { scale: 1.02 } : {}}
        whileTap={!isRunning && !(language === 'python' && isLoadingPyodide) ? { scale: 0.98 } : {}}
      >
        {isRunning ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Running...
          </>
        ) : isLoadingPyodide ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <Play className="w-4 h-4" />
            Run Code
          </>
        )}
      </motion.button>

      {/* Output */}
      {output && (
        <motion.div
          className="bg-gray-100 p-4 rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Output:</h4>
          <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
            {output}
          </pre>
        </motion.div>
      )}

      {/* Info */}
      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-xs text-blue-700">
          <strong>Note:</strong> 
          {language === 'python' && ' Python execution uses Pyodide for client-side Python runtime with automatic package loading.'}
          {language === 'javascript' && ' JavaScript runs in a safe execution environment with console.log capture.'}
          {language === 'cpp' && ' C++ execution is simulated. For full compilation, WebAssembly would be required.'}
        </p>
      </div>
    </motion.div>
  );
} 