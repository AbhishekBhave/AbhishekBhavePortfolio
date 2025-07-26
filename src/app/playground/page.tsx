import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CodeRunner from '@/components/CodeRunner';

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-white via-accent to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Tech Playground
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Live code execution and interactive demos showcasing technical skills
          </p>
        </div>
      </section>

      {/* Code Runners */}
      <section id="playground" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Live Code Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CodeRunner
              language="python"
              title="Data Analysis with Pandas"
              description="Demonstrating data manipulation and analysis skills"
              initialCode={`import pandas as pd
import numpy as np

# Sample data
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana'],
    'Age': [25, 30, 35, 28],
    'Salary': [50000, 60000, 75000, 55000]
}

df = pd.DataFrame(data)
print("DataFrame:")
print(df)
print("Average Age:", df['Age'].mean())
print("Average Salary:", df['Salary'].mean())
print("Age Statistics:")
print(df['Age'].describe())`}
            />

            <CodeRunner
              language="javascript"
              title="JavaScript Array Operations"
              description="Modern JavaScript with array methods and functional programming"
              initialCode={`// Array operations and functional programming
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Original array:', numbers);

// Filter even numbers
const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log('Even numbers:', evenNumbers);

// Map to double each number
const doubled = numbers.map(n => n * 2);
console.log('Doubled array:', doubled);

// Reduce to sum all numbers
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log('Sum of all numbers:', sum);

// Find maximum value
const max = Math.max(...numbers);
console.log('Maximum value:', max);

// Object operations
const users = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'San Francisco' },
  { name: 'Charlie', age: 35, city: 'Chicago' }
];

console.log('Users:', users);

// Filter users by age
const youngUsers = users.filter(user => user.age < 30);
console.log('Users under 30:', youngUsers);

// Map to get just names
const names = users.map(user => user.name);
console.log('User names:', names);`}
            />

            <CodeRunner
              language="cpp"
              title="C++ Algorithm Implementation"
              description="Demonstrating algorithmic thinking and C++ skills"
              initialCode={`#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> numbers = {64, 34, 25, 12, 22, 11, 90};
    
    std::cout << "Original array: ";
    for(int num : numbers) {
        std::cout << num << " ";
    }
    
    std::sort(numbers.begin(), numbers.end());
    
    std::cout << "\\nSorted array: ";
    for(int num : numbers) {
        std::cout << num << " ";
    }
    
    std::cout << "\\nMin: " << numbers.front();
    std::cout << "\\nMax: " << numbers.back();
    
    return 0;
}`}
            />

            <CodeRunner
              language="python"
              title="Machine Learning Example"
              description="Simple ML model using scikit-learn"
              initialCode={`import numpy as np
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Generate sample data
X, y = make_classification(n_samples=1000, n_features=20, n_classes=2, random_state=42)

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

print("Training set size:", X_train.shape[0])
print("Test set size:", X_test.shape[0])

# Train model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)

print("Model Accuracy:", accuracy)
print("Feature importance (top 5):")
for i, importance in enumerate(model.feature_importances_[:5]):
    print(f"Feature {i}: {importance:.3f}")`}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 