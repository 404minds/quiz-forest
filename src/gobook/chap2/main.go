package main

import (
	"fmt"
	"time"
)

func avg(xs []float64) (final float64) {
	total := 0.0
	for _, v := range xs {
		total += v
	}
	final = total / float64(len(xs))
	return
}
func main() {
	// xs := []float64{1, 23, 34, 45, 45, 33}
	// fmt.Println(avg(xs))
	// m := new(sync.Mutex)
	for i := 0; i < 10; i++ {
		go func(i int) {
			// m.Lock()
			fmt.Println(i, "start")
			time.Sleep(time.Second)
			fmt.Println(i, "end")
			// m.Unlock()
		}(i)
	}
	var input string
	fmt.Scanln(&input)

}
