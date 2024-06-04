def money_change(money):
    assert 0 <= money <= 10 ** 3
    num_of_coins = [float("inf") for amount in range(money + 1)]
    num_of_coins[0] = 0
    for denom in [1, 3, 4]:
        for amount in range(len(num_of_coins)):
            if denom <= amount:
                num_of_coins[amount] = min(num_of_coins[amount], 1 + num_of_coins[amount - denom])
    return num_of_coins[money] if num_of_coins[money] != float("inf") else - 1


if __name__ == '__main__':
    input_money = int(input())
    print(money_change(input_money))