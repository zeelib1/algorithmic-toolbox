def gcd(a,b):
    if b == 0:
        return a
    else:
        c = a % b
    return gcd(b, c);


if __name__ == "__main__":
    a, b = map(int, input().split())
    print(gcd(a, b))
