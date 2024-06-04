
def min_refills(d, m, stops):
    x = [0] + stops + [d]
    num_refills = 0
    current_refill = 0
    n = len(x) - 1

    while current_refill < n:
        last_refill = current_refill

        while current_refill < n and (x[current_refill + 1] - x[last_refill] <= m):
            current_refill += 1

        if current_refill == last_refill:
            return -1  

        if current_refill < n:
            num_refills += 1

    return num_refills

if __name__ == '__main__':
    input_d = int(input())
    input_m = int(input())
    input_n = int(input())
    input_stops = list(map(int, input().split()))
    assert len(input_stops) == input_n

    print(min_refills(input_d, input_m, input_stops))
