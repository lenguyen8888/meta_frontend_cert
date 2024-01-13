// write a simple_func() function that calculate and print
// the 1st 10 fibonacci numbers
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55

package main

import "fmt"

func simple_func() {
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
