import (
	"fmt"
	"sort"
)

func longestSquareStreak(nums []int) int {

	// Sort the array
	sort.Ints(nums)

	longest := 0
	numSet := make(map[int]bool)

	// Add values of nums to the set to check for duplicates
	for _, num := range nums {
		numSet[num] = true
	}

	for _, num := range nums {
		length := 1
		current := num

		// Increase the streak length if the square of the current number exists in the set
		for numSet[current*current] {
			current *= current
			length++
		}

		// Update the longest streak length
		if length > 1 {
			if length > longest {
				longest = length
			}
		}
	}

	// Return -1 if the longest streak length is less than 2
	if longest < 2 {
		return -1
	}

	return longest
}