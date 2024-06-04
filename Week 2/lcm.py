def lcm(a, b):
   if b == 0:
        return a
   else:
        c = a % b
        return a * b  // gcd(b, c);

def gcd(a,b):
    if b == 0:
        return a
    else:
        c = a % b
    return gcd(b, c);
    



if __name__ == '__main__':
    a, b = map(int, input().split())
    print(lcm(a, b))


#    if b == 0:
#         return a
#     else:
#         c = a % b
#     return gcd(b, c);
