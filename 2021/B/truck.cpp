#include <bits/stdc++.h>
using namespace std;

int gcd(int a, int b)
{
    if (a == 0)
        return b;
    return gcd(b % a, a);
}

class Node
{
public:
    int city;
    int maxW;
    int price;
    vector<Node *> childs;
};

main()
{
    int T;
    cin >> T;
    for (int i = 1; i < T + 1; i++)
    {
        int N, Q;
        cin >> N, Q;
        for (int i = 0; i < N - 1; i++)
        {
            int x, y, w, p;
            cin >> x >> y >> w >> p;
        }
        int res;

        cout << "Case #" << i << ": " << res << endl;
    }
}