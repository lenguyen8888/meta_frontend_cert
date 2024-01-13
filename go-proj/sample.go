// write a simple_func() function that calculate and print
// the 1st 10 fibonacci numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

package main

import "fmt"

// simple_func is a function that prints the first 10 numbers in the Fibonacci sequence.
// It starts with 1 and 1, and each subsequent number is the sum of the previous two numbers.
func simple_func() {
	// document what a, b, c are in fibonacci sequence calculation

	// initialize a, b, c
	// use a for loop to calculate the first 10 numbers in the Fibonacci sequence
	// print the first 10 numbers in the Fibonacci sequence
	var a, b, c int = 1, 1, 0
	for i := 0; i < 10; i++ {
		fmt.Println(a)
		c = a + b
		a = b
		b = c
	}
}

// call the function
func main() {
	simple_func()
}
