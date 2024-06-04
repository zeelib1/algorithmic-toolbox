def fibonacci_number(n):
    if n == 0:
        return 0
    back2 = 0
    back1 = 1
    nextValue = None
    for i in range (2, n):
        nextValue = back1 + back2
        back2 = back1
        back1 = nextValue
    return (back1 + back2)

if __name__ == '__main__':
    input_n = int(input())
    print(fibonacci_number(input_n))
