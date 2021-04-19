#include <bits/stdc++.h>
using namespace std;

int main()
{
    int T;
    cin >> T;
    for (int idx = 1; idx < T + 1; idx++)
    {
        int N;
        string C;
        cin >> N >> C;
        int counter = 1;
        vector<int> res;
        for (int i = 0; i < N; i++)
        {
            if (i != 0 && int(C[i - 1]) < int(C[i]))
            {
                res.push_back(counter + 1);
            }
            else
            {
                counter = 0;
                res.push_back(counter + 1);
            }
            counter++;
        }

        cout << "Case #" << idx << ": ";
        for (int i = 0; i < N; i++)
        {
            cout << res[i] << " ";
        }

        cout << endl;
    }
}