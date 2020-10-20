#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    for (int asd = 1; asd < T + 1; asd++)
    {
        int N;
        long int res = 0;
        cin >> N;
        vector<int> D(N);
        vector<vector<int>> C(N, D);
        for (int i = 0; i < N; i++)
        {
            for (int j = 0; j < N; j++)
            {
                cin >> C[i][j];
            }
        }
        for (int i = 0; i < N; i++)
        {
            for (int j = 0; j < N; j++)
            {
                long int R = 0;
                for (int k = 0; k < N - j - i; k++)
                {
                    R += C[i + k][j + k];

                }
                res = max(res, R);
            }
        }
        cout << "Case #" << asd << ": " << res << endl;
    }
}