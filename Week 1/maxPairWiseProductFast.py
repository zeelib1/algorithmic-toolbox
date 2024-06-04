def max_pair_wise_product():
    result = 0
    n = int(input().strip())
    max_index = 0;
    numbers = list(map(int, input().strip().split()))
    for i in range(n):
       if (max_index == -1 or numbers[i] > numbers[max_index]):
           max_index = i

    max_index_2 = -1
    for j in range(n):
        if(j != max_index and (max_index_2 == -1 or numbers[j] > numbers[max_index_2])):
            max_index_2 = j       
    return numbers[max_index] * numbers[max_index_2];

print(max_pair_wise_product())

    
