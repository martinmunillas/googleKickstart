#include <bits/stdc++.h>
using namespace std;

bool isPrime(int number)
{
    for (int i = 2; i <= sqrt(number); i++)
    {
        if (number % i == 0)
        {
            return false;
        }
    }
    return true;
}

long long unsigned int getIndex(vector<long long unsigned int> v, long long unsigned int K)
{
    auto it = find(v.begin(), v.end(), K);

    if (it != v.end())
    {
        int index = it - v.begin();
        return index;
    }
    else
    {
        return -1;
    }
}

int main()
{
    int T;
    cin >> T;
    int first = 0;
    int second = 0;
    vector<long long unsigned int> primes;
    for (int idx = 1; idx < T + 1; idx++)
    {
        long long unsigned int Z;
        cin >> Z;
        long long unsigned int i = 0;
        long long unsigned int res = 0;
        while (true)
        {
            if (isPrime(i))
            {
                if (primes.size() == 0 || i > primes[primes.size() - 1])
                {
                    primes.push_back(i);
                }
                if (primes.size() > 1)
                {
                    long long unsigned int index = getIndex(primes, i);
                    if (i * primes[index - 1] > Z)
                    {
                        res = primes[index - 2] * primes[index - 1];
                        break;
                    }
                }
            }
            i++;
        }
        cout << "Case #" << idx << ": " << res << endl;
    }
}