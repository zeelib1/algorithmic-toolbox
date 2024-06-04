def fibonacci_number(n):
   
    PISANO_PERIOD = 60
    n = n % PISANO_PERIOD
    if n == 0:
        return 0
    elif n == 1:
        return 1
    back2 = 0
    back1 = 1
    for i in range (2, n + 1):
        nextValue = (back1 + back2) % 10
        back2 = back1
        back1 = nextValue
    return back1
  

if __name__ == '__main__':
    input_n = int(input())
    print(fibonacci_number(input_n))
