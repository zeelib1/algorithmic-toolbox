#binary search first occurence of duplicate
def binary_search(a, key):
    low, high = 0, len(a) - 1
    result = -1
    while low <= high:
        mid = low + (high - low) // 2
        if a[mid] < key:
            low = mid + 1
        elif a[mid] > key or (mid > low and a[mid - 1] == key):
            high = mid - 1
        else:
            result = mid
            return result
    return result


if __name__ == '__main__':
    num_keys = int(input())
    input_keys = list(map(int, input().split()))
    assert len(input_keys) == num_keys

    num_queries = int(input())
    input_queries = list(map(int, input().split()))
    assert len(input_queries) == num_queries

    for q in input_queries:
        print(binary_search(input_keys, q), end=' ')