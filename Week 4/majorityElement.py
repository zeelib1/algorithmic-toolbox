def majorityElement(arr):
    majority_element = arr[0]
    majority = len(arr) // 2
    count = 1
    
    for i in range(1, len(arr)):
        if count == 0:
            majority_element = arr[i]
            count = 1
        elif majority_element == arr[i]:
            count += 1
        else:
            count -= 1
    
    count = 0
    for i in range(len(arr)):
        if majority_element == arr[i]:
            count += 1

    if count > majority:
        return 1
    return 0

if __name__ == '__main__':
    input_n = int(input())
    input_elements = list(map(int, input().split()))
    assert len(input_elements) == input_n
    print(majorityElement(input_elements))