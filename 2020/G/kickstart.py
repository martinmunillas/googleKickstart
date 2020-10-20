

T = int(input())

for i in range(1, T+1):
    book = str(input())
    L = 0
    print(book)

    while('KICK' in book):
        N = book.index('KICK')
        book = book[N + 3::]
        print(book)
        L += book.count('START')
    print('Case #{}: {}'.format(i, L))
        
