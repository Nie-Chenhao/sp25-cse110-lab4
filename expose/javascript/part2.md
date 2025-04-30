1. What will happen at line 12 and why? If the code causes an error, explain why.
answer: 3 printed. i is incremented until it reaches the length of the prices.length, which is 3 by how it is called.

2. What will happen at line 13 and why? If the code causes an error, explain why. 
answer: 150 printed. var allows being defined again, so the printed value is the last update to it, which is 300*0.5 = 150, the last element in prices.

3. What will happen at line 14 and why? If the code causes an error, explain why.
answer: 150 printed. finalPrice takes (150 * 100) / 100, which is still 150

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why. 
answer: in the for loop every element is multiplied by 0.5, and they are all whole number so would not change after rounding, giving [50, 100, 150]

5. What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).
answer: error due to i not defined. i is defined in the scope of for loop so trying to use it after the for loop is wrong.

6. What will happen at line 13 and why? If the code causes an error, explain why.
answer: error due to discountedPrice not defined, similarly, it only lives in the scope of for loop, could not be printed afterwards.

7. What will happen at line 14 and why? If the code causes an error, explain why.
answer: 150 would be printed, similar to previous question for why the value, and it get printed because it is defined in the scope of the function.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
answer: it still returns [50, 100, 150], value same as 4, because it is defined in the scope of function.

9. What will happen at line 11 and why? If the code causes an error, explain why.
answer: error, simiklar reason in 5, i is only in for loop.

10. What will happen at line 12 and why? If the code causes an error, explain why.
answer: 3 would be printed, it is const and fixed at the value of 3 of [100, 200, 300] when that is given.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
answer: still[50, 100, 150], the const values get successfully pushed into the discounted. 

12. 
A. student.name
B. student['Grad Year']
C. student.greeting()
D. student.['Favorite Teacher'].name
E. student.courseLoad[0]

13. Arithmetic
A. 32 the string, 2 becomes string and concatenated.
B. 1, - is only arithmetic so 3 coerced to number
C. 3, null is coerced to 0.
D. 3null, as one is string, + concatenates and null becomes string
E. 4, true coerced to 1 and gives 1 + 3 = 4
F. 0, both coerced to 0 adding up to 0
G. 3undefined, with string + concatenates and undefined coerced to string
H. NaN, undefined taken as number and gives NaN, so the whole thing is NaN

14. Comparison
A. true, string coerced to number, and 2 > 1
B. false, both are string so comparison done in a lexicographic way. compare the first character and already decided.
C. true, loose would lead '2' to coerce to number and 2 == 2
D. false, strict one does not coerce, different type gives false
E. false, true gives number 1 and 1 == 2 is false.
F. true, any nonzero gives true, both side gives true

15. == is loose, it compare values after converting type. === is strict and only yields true when type and values both match.

16. see code
17. enters the function, declared newArr
for loop, i = 0: callback(array[0]) returns 1*2 = 2, pushed into newArr
i = 1: callback(array[1]) returns 2*2 = 4, pushed into newArr
i = 2: similarly, 3*2 = 6 pushed.
the array[2, 4, 6] is returned.
18. see code
19. print:
1
4
3
2