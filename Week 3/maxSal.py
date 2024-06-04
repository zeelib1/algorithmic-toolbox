def largest_concatenate(numbers):
    if len(numbers) == 0:
        return "0"
    elif len(numbers) == 1:
        return str(numbers[0])
    else:
        numbers = list(map(str, numbers))
        numbers.sort(key=lambda x: x*3, reverse=True)
        result = ''.join(numbers)
        return result


if __name__ == '__main__':
    n = int(input())
    numbers = input().split()
    assert len(numbers) == n
    print(largest_concatenate(numbers))