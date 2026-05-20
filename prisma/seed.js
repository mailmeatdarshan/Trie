require('dotenv').config();
const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Starting seeding...');

  const adminUser = await prisma.user.findFirst({
    where: { role: 'ADMIN' }
  });

  if (!adminUser) {
    console.error('❌ Error: No ADMIN user found in database.');
    console.log('Please sign in as an admin through the app first.');
    return;
  }

  console.log(`👤 Using Admin User: ${adminUser.email}`);

  const problems = [
  {
    "title": "Palindrome Number",
    "description": "Given an integer x, return true if x is a palindrome, and false otherwise.",
    "difficulty": "EASY",
    "tags": [
      "Math"
    ],
    "constraints": "-2^31 <= x <= 2^31 - 1",
    "hints": "Try converting the integer to a string.",
    "testCases": [
      {
        "input": "121",
        "output": "true"
      },
      {
        "input": "-121",
        "output": "false"
      },
      {
        "input": "10",
        "output": "false"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "x = 121",
        "output": "true",
        "explanation": "121 reads as 121 from left to right and from right to left."
      },
      "PYTHON": {
        "input": "x = -121",
        "output": "false",
        "explanation": "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number} x\n * @return {boolean}\n */\nvar isPalindrome = function(x) {\n    \n};\n\nfunction main() {\n    let res;\n    const x = parseInt(input); res = isPalindrome(x);\n    \n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def isPalindrome(self, x: int) -> bool:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    x = int(line); res = sol.isPalindrome(x)\n    \n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public boolean isPalindrome(int x) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        int x = Integer.parseInt(line.trim()); var res = sol.isPalindrome(x);\n        \n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool isPalindrome(int x) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    int x = stoi(line); auto res = sol.isPalindrome(x);\n    \n    \n    \n    \n    \n\n    cout << (res ? \"true\" : \"false\") << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc isPalindrome(x int) bool {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    x, _ := strconv.Atoi(line); res := isPalindrome(x)\n    \n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var isPalindrome = function(x) {\n    if (x < 0) return false;\n    const str = x.toString();\n    return str === str.split('').reverse().join('');\n};",
      "PYTHON": "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        if x < 0: return False\n        return str(x) == str(x)[::-1]",
      "JAVA": "class Solution {\n    public boolean isPalindrome(int x) {\n        if (x < 0) return false;\n        int reversed = 0, remainder, original = x;\n        while (x != 0) {\n            remainder = x % 10;\n            reversed = reversed * 10 + remainder;\n            x /= 10;\n        }\n        return original == reversed;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        if (x < 0) return false;\n        long long reversed = 0;\n        int original = x;\n        while (x > 0) {\n            reversed = reversed * 10 + x % 10;\n            x /= 10;\n        }\n        return original == (int)reversed;\n    }\n};",
      "GO": "func isPalindrome(x int) bool {\n    if x < 0 { return false }\n    s := strconv.Itoa(x)\n    for i := 0; i < len(s)/2; i++ {\n        if s[i] != s[len(s)-1-i] { return false }\n    }\n    return true\n}"
    }
  },
  {
    "title": "Reverse Integer",
    "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    "difficulty": "MEDIUM",
    "tags": [
      "Math"
    ],
    "constraints": "-2^31 <= x <= 2^31 - 1",
    "testCases": [
      {
        "input": "123",
        "output": "321"
      },
      {
        "input": "-123",
        "output": "-321"
      },
      {
        "input": "120",
        "output": "21"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "x = 123",
        "output": "321"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number} x\n * @return {number}\n */\nvar reverse = function(x) {\n    \n};\n\nfunction main() {\n    let res;\n    const x = parseInt(input); res = reverse(x);\n    \n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def reverse(self, x: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    x = int(line); res = sol.reverse(x)\n    \n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int reverse(int x) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        int x = Integer.parseInt(line.trim()); var res = sol.reverse(x);\n        \n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int reverse(int x) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    int x = stoi(line); auto res = sol.reverse(x);\n    \n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc reverse(x int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    x, _ := strconv.Atoi(line); res := reverse(x)\n    \n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var reverse = function(x) {\n    const limit = Math.pow(2, 31);\n    const sign = x < 0 ? -1 : 1;\n    const n = Math.abs(x).toString().split('').reverse().join('');\n    const result = sign * parseInt(n);\n    if (result < -limit || result > limit - 1) return 0;\n    return result;\n};",
      "PYTHON": "class Solution:\n    def reverse(self, x: int) -> int:\n        sign = -1 if x < 0 else 1\n        x = abs(x)\n        res = int(str(x)[::-1]) * sign\n        if res < -2**31 or res > 2**31 - 1:\n            return 0\n        return res",
      "JAVA": "class Solution {\n    public int reverse(int x) {\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n            if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) return 0;\n        }\n        return (int) rev;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int reverse(int x) {\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n        }\n        if (rev < INT_MIN || rev > INT_MAX) return 0;\n        return (int)rev;\n    }\n};",
      "GO": "func reverse(x int) int {\n    res := 0\n    for x != 0 {\n        res = res*10 + x%10\n        x /= 10\n    }\n    if res < -2147483648 || res > 2147483647 {\n        return 0\n    }\n    return res\n}"
    }
  },
  {
    "title": "Find Maximum and Minimum with Minimum Comparisons",
    "description": "Given an array of integers, find both the maximum and minimum element using the least number of comparisons possible. Instead of the naive 2(n-1) comparisons, achieve it in approximately 3n/2 comparisons by processing elements in pairs.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Divide and Conquer"
    ],
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "hints": "Process elements in pairs. Compare them against each other first, then compare the larger with max and the smaller with min.",
    "testCases": [
      {
        "input": "[3, 5, 1, 8, 2, 9, 4]",
        "output": "[1, 9]"
      },
      {
        "input": "[10]",
        "output": "[10, 10]"
      },
      {
        "input": "[-3, -1, -7, -4]",
        "output": "[-7, -1]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [3, 5, 1, 8, 2, 9, 4]",
        "output": "[1, 9]",
        "explanation": "Minimum is 1 and maximum is 9."
      },
      "PYTHON": {
        "input": "nums = [3, 5, 1, 8, 2, 9, 4]",
        "output": "[1, 9]",
        "explanation": "Minimum is 1 and maximum is 9."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number[]} [min, max]\n */\nvar getMinMax = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = getMinMax(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def getMinMax(self, nums: list[int]) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.getMinMax(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] getMinMax(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.getMinMax(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    pair<int,int> getMinMax(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.getMinMax(nums);\n    \n    \n    \n    \n\n    cout << \"[\"; for(int i=0;i<res.size();i++) cout << res[i] << (i==res.size()-1?\"\":\",\"); cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc getMinMax(nums []int) [2]int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := getMinMax(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var getMinMax = function(nums) {\n    let min = nums[0], max = nums[0];\n    let i = (nums.length % 2 === 0) ? 0 : 1;\n    if (nums.length % 2 === 0) {\n        if (nums[0] < nums[1]) { min = nums[0]; max = nums[1]; }\n        else { min = nums[1]; max = nums[0]; }\n        i = 2;\n    }\n    for (; i < nums.length - 1; i += 2) {\n        let lo, hi;\n        if (nums[i] < nums[i+1]) { lo = nums[i]; hi = nums[i+1]; }\n        else { lo = nums[i+1]; hi = nums[i]; }\n        if (lo < min) min = lo;\n        if (hi > max) max = hi;\n    }\n    return [min, max];\n};",
      "PYTHON": "class Solution:\n    def getMinMax(self, nums):\n        n = len(nums)\n        if n == 1:\n            return [nums[0], nums[0]]\n        if nums[0] < nums[1]:\n            mn, mx = nums[0], nums[1]\n        else:\n            mn, mx = nums[1], nums[0]\n        i = 2\n        while i < n - 1:\n            if nums[i] < nums[i+1]:\n                mn = min(mn, nums[i])\n                mx = max(mx, nums[i+1])\n            else:\n                mn = min(mn, nums[i+1])\n                mx = max(mx, nums[i])\n            i += 2\n        if n % 2 != 0:\n            mn = min(mn, nums[-1])\n            mx = max(mx, nums[-1])\n        return [mn, mx]",
      "JAVA": "class Solution {\n    public int[] getMinMax(int[] nums) {\n        int min, max, i;\n        if (nums.length % 2 == 0) {\n            min = Math.min(nums[0], nums[1]);\n            max = Math.max(nums[0], nums[1]);\n            i = 2;\n        } else {\n            min = max = nums[0];\n            i = 1;\n        }\n        while (i < nums.length - 1) {\n            if (nums[i] < nums[i+1]) {\n                min = Math.min(min, nums[i]);\n                max = Math.max(max, nums[i+1]);\n            } else {\n                min = Math.min(min, nums[i+1]);\n                max = Math.max(max, nums[i]);\n            }\n            i += 2;\n        }\n        return new int[]{min, max};\n    }\n}",
      "CPP": "class Solution {\npublic:\n    pair<int,int> getMinMax(vector<int>& nums) {\n        int mn, mx, i;\n        if (nums.size() % 2 == 0) {\n            mn = min(nums[0], nums[1]);\n            mx = max(nums[0], nums[1]);\n            i = 2;\n        } else {\n            mn = mx = nums[0];\n            i = 1;\n        }\n        while (i < (int)nums.size() - 1) {\n            if (nums[i] < nums[i+1]) {\n                mn = min(mn, nums[i]);\n                mx = max(mx, nums[i+1]);\n            } else {\n                mn = min(mn, nums[i+1]);\n                mx = max(mx, nums[i]);\n            }\n            i += 2;\n        }\n        return {mn, mx};\n    }\n};",
      "GO": "func getMinMax(nums []int) [2]int {\n    mn, mx := nums[0], nums[0]\n    i := 1\n    if len(nums)%2 == 0 {\n        if nums[0] < nums[1] { mn, mx = nums[0], nums[1] } else { mn, mx = nums[1], nums[0] }\n        i = 2\n    }\n    for ; i < len(nums)-1; i += 2 {\n        lo, hi := nums[i], nums[i+1]\n        if lo > hi { lo, hi = hi, lo }\n        if lo < mn { mn = lo }\n        if hi > mx { mx = hi }\n    }\n    if len(nums)%2 != 0 {\n        if nums[len(nums)-1] < mn { mn = nums[len(nums)-1] }\n        if nums[len(nums)-1] > mx { mx = nums[len(nums)-1] }\n    }\n    return [2]int{mn, mx}\n}"
    }
  },
  {
    "title": "Sort Colors (Sort 0s, 1s and 2s)",
    "description": "Given an array nums containing only 0s, 1s, and 2s, sort the array in-place so that all 0s come first, followed by all 1s, and then all 2s. You must solve this in a single pass without using a sorting library (Dutch National Flag algorithm).",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "constraints": "1 <= nums.length <= 300\nnums[i] is either 0, 1, or 2.",
    "hints": "Use three pointers: low, mid, and high. Keep 0s before low, 2s after high, and 1s between low and mid.",
    "testCases": [
      {
        "input": "[2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]"
      },
      {
        "input": "[2,0,1]",
        "output": "[0,1,2]"
      },
      {
        "input": "[0]",
        "output": "[0]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": "After sorting in-place using the Dutch National Flag algorithm."
      },
      "PYTHON": {
        "input": "nums = [2,0,1]",
        "output": "[0,1,2]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar sortColors = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = sortColors(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(nums));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def sortColors(self, nums: list[int]) -> None:\n        \"\"\"Do not return anything, modify nums in-place instead.\"\"\"\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.sortColors(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(nums).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public void sortColors(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.sortColors(nums);\n        \n        \n        \n        \n\n        \n            System.out.println(Arrays.deepToString(nums).replace(\" \", \"\"));\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.sortColors(nums);\n    \n    \n    \n    \n\n    \n        cout << \"[\";\n        auto& out = nums;\n        for(int i=0; i<out.size(); i++) {\n            cout << out[i];\n            cout << (i==out.size()-1 ? \"\" : \",\");\n        }\n        cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc sortColors(nums []int) {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := sortColors(nums)\n    \n    \n    \n    \n\n    \n        b, _ := json.Marshal(nums)\n        fmt.Println(string(b))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var sortColors = function(nums) {\n    let low = 0, mid = 0, high = nums.length - 1;\n    while (mid <= high) {\n        if (nums[mid] === 0) {\n            [nums[low], nums[mid]] = [nums[mid], nums[low]];\n            low++; mid++;\n        } else if (nums[mid] === 1) {\n            mid++;\n        } else {\n            [nums[mid], nums[high]] = [nums[high], nums[mid]];\n            high--;\n        }\n    }\n};",
      "PYTHON": "class Solution:\n    def sortColors(self, nums):\n        low, mid, high = 0, 0, len(nums) - 1\n        while mid <= high:\n            if nums[mid] == 0:\n                nums[low], nums[mid] = nums[mid], nums[low]\n                low += 1; mid += 1\n            elif nums[mid] == 1:\n                mid += 1\n            else:\n                nums[mid], nums[high] = nums[high], nums[mid]\n                high -= 1",
      "JAVA": "class Solution {\n    public void sortColors(int[] nums) {\n        int low = 0, mid = 0, high = nums.length - 1;\n        while (mid <= high) {\n            if (nums[mid] == 0) {\n                int t = nums[low]; nums[low] = nums[mid]; nums[mid] = t;\n                low++; mid++;\n            } else if (nums[mid] == 1) {\n                mid++;\n            } else {\n                int t = nums[mid]; nums[mid] = nums[high]; nums[high] = t;\n                high--;\n            }\n        }\n    }\n}",
      "CPP": "class Solution {\npublic:\n    void sortColors(vector<int>& nums) {\n        int low = 0, mid = 0, high = nums.size() - 1;\n        while (mid <= high) {\n            if (nums[mid] == 0) swap(nums[low++], nums[mid++]);\n            else if (nums[mid] == 1) mid++;\n            else swap(nums[mid], nums[high--]);\n        }\n    }\n};",
      "GO": "func sortColors(nums []int) {\n    low, mid, high := 0, 0, len(nums)-1\n    for mid <= high {\n        if nums[mid] == 0 {\n            nums[low], nums[mid] = nums[mid], nums[low]\n            low++; mid++\n        } else if nums[mid] == 1 {\n            mid++\n        } else {\n            nums[mid], nums[high] = nums[high], nums[mid]\n            high--\n        }\n    }\n}"
    }
  },
  {
    "title": "Union and Intersection of Two Sorted Arrays",
    "description": "Given two sorted arrays nums1 and nums2, return their union and intersection. The union contains all distinct elements from both arrays. The intersection contains only elements present in both arrays. Both results should be sorted.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Two Pointers",
      "Sorting"
    ],
    "constraints": "1 <= nums1.length, nums2.length <= 10^4\n-10^9 <= nums1[i], nums2[i] <= 10^9\nnums1 and nums2 are sorted in non-decreasing order.",
    "hints": "Use two pointers. For union, add the smaller element and skip duplicates. For intersection, add only when both elements are equal.",
    "testCases": [
      {
        "input": "nums1 = [1,2,3,4,5], nums2 = [1,2,3]",
        "output": "union=[1,2,3,4,5], intersection=[1,2,3]"
      },
      {
        "input": "nums1 = [1,3,4,5,7], nums2 = [2,3,5,6]",
        "output": "union=[1,2,3,4,5,6,7], intersection=[3,5]"
      },
      {
        "input": "nums1 = [1,2,2,3], nums2 = [2,2,4]",
        "output": "union=[1,2,3,4], intersection=[2]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums1 = [1,3,4,5,7], nums2 = [2,3,5,6]",
        "output": "union=[1,2,3,4,5,6,7], intersection=[3,5]",
        "explanation": "Merge both arrays removing duplicates for union; keep common elements for intersection."
      },
      "PYTHON": {
        "input": "nums1 = [1,3,4,5,7], nums2 = [2,3,5,6]",
        "output": "union=[1,2,3,4,5,6,7], intersection=[3,5]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {{ union: number[], intersection: number[] }}\n */\nvar unionAndIntersection = function(nums1, nums2) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    const arrays = input.match(/\\[.*?\\]/g).map(JSON.parse); res = unionAndIntersection(arrays[0], arrays[1]);\n    \n    \n    \n    \n    console.log(`union=[${res.union.join(\",\")}], intersection=[${res.intersection.join(\",\")}]`);\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def unionAndIntersection(self, nums1: list[int], nums2: list[int]):\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    import re; arrays = [json.loads(a) for a in re.findall(r'\\[.*?\\]', line)]; res = sol.unionAndIntersection(arrays[0], arrays[1])\n    \n    \n    \n    \n    print(f\"union=[{','.join(map(str, res[0]))}], intersection=[{','.join(map(str, res[1]))}]\")\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[][] unionAndIntersection(int[] nums1, int[] nums2) {\n        // returns [union, intersection] as two arrays\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n            String[] parts = line.split(\"\\]\");\n            int[] n1 = Arrays.stream(parts[0].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            int[] n2 = Arrays.stream(parts[1].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.unionAndIntersection(n1, n2);\n        \n        \n        \n\n        System.out.println(\"union=\" + Arrays.toString(res[0]).replace(\" \", \"\") + \", intersection=\" + Arrays.toString(res[1]).replace(\" \", \"\"));\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    pair<vector<int>,vector<int>> unionAndIntersection(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n        auto pos1 = line.find('['), pos2 = line.find(']', pos1), pos3 = line.find('[', pos2), pos4 = line.find(']', pos3);\n        auto s1 = line.substr(pos1+1, pos2-pos1-1), s2 = line.substr(pos3+1, pos4-pos3-1);\n        replace(s1.begin(), s1.end(), ',', ' '); replace(s2.begin(), s2.end(), ',', ' ');\n        stringstream ss1(s1), ss2(s2);\n        int val; vector<int> n1, n2;\n        while(ss1 >> val) n1.push_back(val);\n        while(ss2 >> val) n2.push_back(val);\n        auto res = sol.unionAndIntersection(n1, n2);\n    \n    \n    \n\n    cout << \"union=[\"; for(int i=0;i<res.first.size();i++) cout << res.first[i] << (i==res.first.size()-1?\"\":\",\");\ncout << \"], intersection=[\"; for(int i=0;i<res.second.size();i++) cout << res.second[i] << (i==res.second.size()-1?\"\":\",\"); cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc unionAndIntersection(nums1 []int, nums2 []int) ([]int, []int) {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n        parts := strings.Split(line, \"]\")\n        var n1, n2 []int\n        json.Unmarshal([]byte(parts[0]+\"]\"), &n1)\n        if len(parts) > 1 {\n            s2 := parts[1]\n            if strings.Contains(s2, \"[\") {\n                json.Unmarshal([]byte(s2[strings.Index(s2, \"[\"):]+\"]\"), &n2)\n            }\n        }\n        res1, res2 := unionAndIntersection(n1, n2)\n    \n    \n    \n\n    u, _ := json.Marshal(res1); i, _ := json.Marshal(res2); fmt.Printf(\"union=%s, intersection=%s\\n\", string(u), string(i))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var unionAndIntersection = function(nums1, nums2) {\n    const union = [], intersection = [];\n    let i = 0, j = 0;\n    while (i < nums1.length && j < nums2.length) {\n        if (nums1[i] < nums2[j]) {\n            if (!union.length || union[union.length-1] !== nums1[i]) union.push(nums1[i]);\n            i++;\n        } else if (nums1[i] > nums2[j]) {\n            if (!union.length || union[union.length-1] !== nums2[j]) union.push(nums2[j]);\n            j++;\n        } else {\n            if (!union.length || union[union.length-1] !== nums1[i]) union.push(nums1[i]);\n            if (!intersection.length || intersection[intersection.length-1] !== nums1[i]) intersection.push(nums1[i]);\n            i++; j++;\n        }\n    }\n    while (i < nums1.length) { if (!union.length || union[union.length-1] !== nums1[i]) union.push(nums1[i]); i++; }\n    while (j < nums2.length) { if (!union.length || union[union.length-1] !== nums2[j]) union.push(nums2[j]); j++; }\n    return { union, intersection };\n};",
      "PYTHON": "class Solution:\n    def unionAndIntersection(self, nums1, nums2):\n        union, intersection = [], []\n        i = j = 0\n        while i < len(nums1) and j < len(nums2):\n            if nums1[i] < nums2[j]:\n                if not union or union[-1] != nums1[i]: union.append(nums1[i])\n                i += 1\n            elif nums1[i] > nums2[j]:\n                if not union or union[-1] != nums2[j]: union.append(nums2[j])\n                j += 1\n            else:\n                if not union or union[-1] != nums1[i]: union.append(nums1[i])\n                if not intersection or intersection[-1] != nums1[i]: intersection.append(nums1[i])\n                i += 1; j += 1\n        while i < len(nums1):\n            if not union or union[-1] != nums1[i]: union.append(nums1[i])\n            i += 1\n        while j < len(nums2):\n            if not union or union[-1] != nums2[j]: union.append(nums2[j])\n            j += 1\n        return union, intersection",
      "JAVA": "class Solution {\n    public int[][] unionAndIntersection(int[] a, int[] b) {\n        List<Integer> u = new ArrayList<>(), inter = new ArrayList<>();\n        int i = 0, j = 0;\n        while (i < a.length && j < b.length) {\n            if (a[i] < b[j]) { if (u.isEmpty() || u.get(u.size()-1) != a[i]) u.add(a[i]); i++; }\n            else if (a[i] > b[j]) { if (u.isEmpty() || u.get(u.size()-1) != b[j]) u.add(b[j]); j++; }\n            else { if (u.isEmpty() || u.get(u.size()-1) != a[i]) u.add(a[i]); if (inter.isEmpty() || inter.get(inter.size()-1) != a[i]) inter.add(a[i]); i++; j++; }\n        }\n        while (i < a.length) { if (u.isEmpty() || u.get(u.size()-1) != a[i]) u.add(a[i]); i++; }\n        while (j < b.length) { if (u.isEmpty() || u.get(u.size()-1) != b[j]) u.add(b[j]); j++; }\n        return new int[][] { u.stream().mapToInt(x->x).toArray(), inter.stream().mapToInt(x->x).toArray() };\n    }\n}",
      "CPP": "class Solution {\npublic:\n    pair<vector<int>,vector<int>> unionAndIntersection(vector<int>& a, vector<int>& b) {\n        vector<int> u, inter;\n        int i = 0, j = 0;\n        while (i < a.size() && j < b.size()) {\n            if (a[i] < b[j]) { if (u.empty() || u.back() != a[i]) u.push_back(a[i]); i++; }\n            else if (a[i] > b[j]) { if (u.empty() || u.back() != b[j]) u.push_back(b[j]); j++; }\n            else { if (u.empty() || u.back() != a[i]) u.push_back(a[i]); if (inter.empty() || inter.back() != a[i]) inter.push_back(a[i]); i++; j++; }\n        }\n        while (i < a.size()) { if (u.empty() || u.back() != a[i]) u.push_back(a[i]); i++; }\n        while (j < b.size()) { if (u.empty() || u.back() != b[j]) u.push_back(b[j]); j++; }\n        return {u, inter};\n    }\n};",
      "GO": "func unionAndIntersection(a, b []int) ([]int, []int) {\n    var u, inter []int\n    i, j := 0, 0\n    last := func(s []int) int { if len(s) == 0 { return -1<<62 }; return s[len(s)-1] }\n    for i < len(a) && j < len(b) {\n        if a[i] < b[j] { if last(u) != a[i] { u = append(u, a[i]) }; i++ } else if a[i] > b[j] { if last(u) != b[j] { u = append(u, b[j]) }; j++ } else { if last(u) != a[i] { u = append(u, a[i]) }; if last(inter) != a[i] { inter = append(inter, a[i]) }; i++; j++ }\n    }\n    for ; i < len(a); i++ { if last(u) != a[i] { u = append(u, a[i]) } }\n    for ; j < len(b); j++ { if last(u) != b[j] { u = append(u, b[j]) } }\n    return u, inter\n}"
    }
  },
  {
    "title": "Maximum Subarray (Kadane's Algorithm)",
    "description": "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum. This is the classic Kadane's Algorithm problem.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Dynamic Programming",
      "Divide and Conquer"
    ],
    "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "hints": "At each index, decide whether to extend the current subarray or start a new one. Current subarray sum = max(nums[i], currentSum + nums[i]).",
    "testCases": [
      {
        "input": "[-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6"
      },
      {
        "input": "[1]",
        "output": "1"
      },
      {
        "input": "[5,4,-1,7,8]",
        "output": "23"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "The subarray [4,-1,2,1] has the largest sum = 6."
      },
      "PYTHON": {
        "input": "nums = [5,4,-1,7,8]",
        "output": "23",
        "explanation": "The entire array is the maximum subarray."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar maxSubArray = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = maxSubArray(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def maxSubArray(self, nums: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.maxSubArray(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int maxSubArray(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.maxSubArray(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.maxSubArray(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc maxSubArray(nums []int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := maxSubArray(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var maxSubArray = function(nums) {\n    let maxSum = nums[0], currSum = nums[0];\n    for (let i = 1; i < nums.length; i++) {\n        currSum = Math.max(nums[i], currSum + nums[i]);\n        maxSum = Math.max(maxSum, currSum);\n    }\n    return maxSum;\n};",
      "PYTHON": "class Solution:\n    def maxSubArray(self, nums):\n        max_sum = curr = nums[0]\n        for n in nums[1:]:\n            curr = max(n, curr + n)\n            max_sum = max(max_sum, curr)\n        return max_sum",
      "JAVA": "class Solution {\n    public int maxSubArray(int[] nums) {\n        int maxSum = nums[0], curr = nums[0];\n        for (int i = 1; i < nums.length; i++) {\n            curr = Math.max(nums[i], curr + nums[i]);\n            maxSum = Math.max(maxSum, curr);\n        }\n        return maxSum;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int maxSum = nums[0], curr = nums[0];\n        for (int i = 1; i < nums.size(); i++) {\n            curr = max(nums[i], curr + nums[i]);\n            maxSum = max(maxSum, curr);\n        }\n        return maxSum;\n    }\n};",
      "GO": "func maxSubArray(nums []int) int {\n    maxSum, curr := nums[0], nums[0]\n    for _, n := range nums[1:] {\n        if curr+n > n { curr = curr + n } else { curr = n }\n        if curr > maxSum { maxSum = curr }\n    }\n    return maxSum\n}"
    }
  },
  {
    "title": "Find All Duplicates in an Array",
    "description": "Given an integer array nums of length n where all integers are in the range [1, n] and each integer appears at most twice, return an array of all the integers that appear twice. You must write an algorithm that runs in O(n) time and uses only O(1) extra space (excluding the output array).",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Hash Table"
    ],
    "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= nums.length\nEach element in nums appears once or twice.",
    "hints": "Use the sign of nums[abs(nums[i])-1] as a visited marker. If the value at that index is already negative, you've found a duplicate.",
    "testCases": [
      {
        "input": "[4,3,2,7,8,2,3,1]",
        "output": "[2,3]"
      },
      {
        "input": "[1,1,2]",
        "output": "[1]"
      },
      {
        "input": "[1]",
        "output": "[]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [4,3,2,7,8,2,3,1]",
        "output": "[2,3]",
        "explanation": "2 and 3 each appear twice in the array."
      },
      "PYTHON": {
        "input": "nums = [1,1,2]",
        "output": "[1]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar findDuplicates = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = findDuplicates(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def findDuplicates(self, nums: list[int]) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.findDuplicates(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public List<Integer> findDuplicates(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.findDuplicates(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> findDuplicates(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.findDuplicates(nums);\n    \n    \n    \n    \n\n    cout << \"[\"; for(int i=0;i<res.size();i++) cout << res[i] << (i==res.size()-1?\"\":\",\"); cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc findDuplicates(nums []int) []int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := findDuplicates(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var findDuplicates = function(nums) {\n    const result = [];\n    for (let i = 0; i < nums.length; i++) {\n        const idx = Math.abs(nums[i]) - 1;\n        if (nums[idx] < 0) result.push(idx + 1);\n        else nums[idx] = -nums[idx];\n    }\n    return result;\n};",
      "PYTHON": "class Solution:\n    def findDuplicates(self, nums):\n        result = []\n        for n in nums:\n            idx = abs(n) - 1\n            if nums[idx] < 0:\n                result.append(idx + 1)\n            else:\n                nums[idx] = -nums[idx]\n        return result",
      "JAVA": "class Solution {\n    public List<Integer> findDuplicates(int[] nums) {\n        List<Integer> res = new ArrayList<>();\n        for (int n : nums) {\n            int idx = Math.abs(n) - 1;\n            if (nums[idx] < 0) res.add(idx + 1);\n            else nums[idx] = -nums[idx];\n        }\n        return res;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    vector<int> findDuplicates(vector<int>& nums) {\n        vector<int> res;\n        for (int n : nums) {\n            int idx = abs(n) - 1;\n            if (nums[idx] < 0) res.push_back(idx + 1);\n            else nums[idx] = -nums[idx];\n        }\n        return res;\n    }\n};",
      "GO": "func findDuplicates(nums []int) []int {\n    var res []int\n    for _, n := range nums {\n        if n < 0 { n = -n }\n        idx := n - 1\n        if nums[idx] < 0 { res = append(res, idx+1) } else { nums[idx] = -nums[idx] }\n    }\n    return res\n}"
    }
  },
  {
    "title": "Merge Overlapping Intervals",
    "description": "Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Sorting"
    ],
    "constraints": "1 <= intervals.length <= 10^4\nintervals[i].length == 2\n0 <= start_i <= end_i <= 10^4",
    "hints": "Sort intervals by start time. Then iterate and merge whenever the current interval overlaps with the previous one.",
    "testCases": [
      {
        "input": "[[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]"
      },
      {
        "input": "[[1,4],[4,5]]",
        "output": "[[1,5]]"
      },
      {
        "input": "[[1,4],[0,4]]",
        "output": "[[0,4]]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": "Intervals [1,3] and [2,6] overlap, so they are merged into [1,6]."
      },
      "PYTHON": {
        "input": "intervals = [[1,4],[4,5]]",
        "output": "[[1,5]]",
        "explanation": "Intervals [1,4] and [4,5] are considered overlapping."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} intervals\n * @return {number[][]}\n */\nvar merge = function(intervals) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    const matrix = JSON.parse(input); res = merge(matrix);\n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def merge(self, intervals: list[list[int]]) -> list[list[int]]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    matrix = json.loads(line); res = sol.merge(matrix)\n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[][] merge(int[][] intervals) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n            String s = line.substring(1, line.length()-1);\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = s.indexOf('[', i)) != -1) {\n                int j = s.indexOf(']', i);\n                String row = s.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.merge(matrix);\n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& intervals) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n        vector<vector<int>> matrix;\n        size_t pos = 0;\n        while((pos = line.find('[', pos + 1)) != string::npos) {\n            if (line[pos+1] == '[') continue;\n            size_t end = line.find(']', pos);\n            if(end == string::npos) break;\n            string rowStr = line.substr(pos+1, end-pos-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int val; vector<int> row;\n            while(ssr >> val) row.push_back(val);\n            if(!row.empty()) matrix.push_back(row);\n        }\n        auto res = sol.merge(matrix);\n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc merge(intervals [][]int) [][]int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    var matrix [][]int; json.Unmarshal([]byte(line), &matrix); res := merge(matrix)\n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var merge = function(intervals) {\n    intervals.sort((a, b) => a[0] - b[0]);\n    const result = [intervals[0]];\n    for (let i = 1; i < intervals.length; i++) {\n        const last = result[result.length - 1];\n        if (intervals[i][0] <= last[1]) {\n            last[1] = Math.max(last[1], intervals[i][1]);\n        } else {\n            result.push(intervals[i]);\n        }\n    }\n    return result;\n};",
      "PYTHON": "class Solution:\n    def merge(self, intervals):\n        intervals.sort(key=lambda x: x[0])\n        merged = [intervals[0]]\n        for start, end in intervals[1:]:\n            if start <= merged[-1][1]:\n                merged[-1][1] = max(merged[-1][1], end)\n            else:\n                merged.append([start, end])\n        return merged",
      "JAVA": "class Solution {\n    public int[][] merge(int[][] intervals) {\n        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);\n        List<int[]> res = new ArrayList<>();\n        res.add(intervals[0]);\n        for (int i = 1; i < intervals.length; i++) {\n            int[] last = res.get(res.size()-1);\n            if (intervals[i][0] <= last[1]) last[1] = Math.max(last[1], intervals[i][1]);\n            else res.add(intervals[i]);\n        }\n        return res.toArray(new int[0][]);\n    }\n}",
      "CPP": "class Solution {\npublic:\n    vector<vector<int>> merge(vector<vector<int>>& iv) {\n        sort(iv.begin(), iv.end());\n        vector<vector<int>> res = {iv[0]};\n        for (int i = 1; i < iv.size(); i++) {\n            if (iv[i][0] <= res.back()[1]) res.back()[1] = max(res.back()[1], iv[i][1]);\n            else res.push_back(iv[i]);\n        }\n        return res;\n    }\n};",
      "GO": "func merge(intervals [][]int) [][]int {\n    sort.Slice(intervals, func(i, j int) bool { return intervals[i][0] < intervals[j][0] })\n    res := [][]int{intervals[0]}\n    for _, iv := range intervals[1:] {\n        last := res[len(res)-1]\n        if iv[0] <= last[1] { if iv[1] > last[1] { last[1] = iv[1] } } else { res = append(res, iv) }\n    }\n    return res\n}"
    }
  },
  {
    "title": "Count Inversions in an Array",
    "description": "Given an array of integers, count the number of inversions. A pair (i, j) is an inversion if i < j and arr[i] > arr[j]. Use a modified merge sort to solve this in O(n log n) time.",
    "difficulty": "HARD",
    "tags": [
      "Array",
      "Divide and Conquer",
      "Sorting"
    ],
    "constraints": "1 <= nums.length <= 5 * 10^4\n-10^9 <= nums[i] <= 10^9",
    "hints": "Modify merge sort: while merging two halves, if nums[i] > nums[j], then all elements from i to mid are greater than nums[j], contributing (mid - i + 1) inversions.",
    "testCases": [
      {
        "input": "[2,4,1,3,5]",
        "output": "3"
      },
      {
        "input": "[5,4,3,2,1]",
        "output": "10"
      },
      {
        "input": "[1,20,6,4,5]",
        "output": "5"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [2,4,1,3,5]",
        "output": "3",
        "explanation": "Inversions are (2,1), (4,1), (4,3)."
      },
      "PYTHON": {
        "input": "nums = [5,4,3,2,1]",
        "output": "10",
        "explanation": "Every pair is an inversion in a fully reversed array."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar countInversions = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = countInversions(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def countInversions(self, nums: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.countInversions(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public long countInversions(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.countInversions(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    long long countInversions(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.countInversions(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc countInversions(nums []int) int64 {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := countInversions(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var countInversions = function(nums) {\n    function mergeSort(arr) {\n        if (arr.length <= 1) return [arr, 0];\n        const mid = Math.floor(arr.length / 2);\n        const [left, lc] = mergeSort(arr.slice(0, mid));\n        const [right, rc] = mergeSort(arr.slice(mid));\n        const merged = [], count = lc + rc;\n        let i = 0, j = 0, inv = 0;\n        while (i < left.length && j < right.length) {\n            if (left[i] <= right[j]) { merged.push(left[i++]); }\n            else { merged.push(right[j++]); inv += left.length - i; }\n        }\n        return [[...merged, ...left.slice(i), ...right.slice(j)], count + inv];\n    }\n    return mergeSort(nums)[1];\n};",
      "PYTHON": "class Solution:\n    def countInversions(self, nums):\n        def merge_sort(arr):\n            if len(arr) <= 1: return arr, 0\n            mid = len(arr) // 2\n            left, lc = merge_sort(arr[:mid])\n            right, rc = merge_sort(arr[mid:])\n            merged, inv = [], lc + rc\n            i = j = 0\n            while i < len(left) and j < len(right):\n                if left[i] <= right[j]: merged.append(left[i]); i += 1\n                else: merged.append(right[j]); inv += len(left) - i; j += 1\n            merged += left[i:] + right[j:]\n            return merged, inv\n        return merge_sort(nums)[1]",
      "JAVA": "class Solution {\n    public long countInversions(int[] nums) {\n        return mergeSort(nums, 0, nums.length - 1);\n    }\n    private long mergeSort(int[] arr, int l, int r) {\n        if (l >= r) return 0;\n        int mid = (l + r) / 2;\n        long cnt = mergeSort(arr, l, mid) + mergeSort(arr, mid+1, r);\n        int[] tmp = new int[r - l + 1];\n        int i = l, j = mid+1, k = 0;\n        while (i <= mid && j <= r) {\n            if (arr[i] <= arr[j]) tmp[k++] = arr[i++];\n            else { tmp[k++] = arr[j++]; cnt += mid - i + 1; }\n        }\n        while (i <= mid) tmp[k++] = arr[i++];\n        while (j <= r) tmp[k++] = arr[j++];\n        System.arraycopy(tmp, 0, arr, l, tmp.length);\n        return cnt;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    long long merge(vector<int>& arr, int l, int m, int r) {\n        vector<int> tmp;\n        int i = l, j = m+1; long long cnt = 0;\n        while (i <= m && j <= r) {\n            if (arr[i] <= arr[j]) tmp.push_back(arr[i++]);\n            else { tmp.push_back(arr[j++]); cnt += m - i + 1; }\n        }\n        while (i <= m) tmp.push_back(arr[i++]);\n        while (j <= r) tmp.push_back(arr[j++]);\n        for (int k = l; k <= r; k++) arr[k] = tmp[k-l];\n        return cnt;\n    }\n    long long mergeSort(vector<int>& arr, int l, int r) {\n        if (l >= r) return 0;\n        int m = (l+r)/2;\n        return mergeSort(arr,l,m) + mergeSort(arr,m+1,r) + merge(arr,l,m,r);\n    }\n    long long countInversions(vector<int>& nums) { return mergeSort(nums, 0, nums.size()-1); }\n};",
      "GO": "func countInversions(nums []int) int64 {\n    var mergeSort func([]int) ([]int, int64)\n    mergeSort = func(arr []int) ([]int, int64) {\n        if len(arr) <= 1 { return arr, 0 }\n        mid := len(arr) / 2\n        left, lc := mergeSort(arr[:mid])\n        right, rc := mergeSort(arr[mid:])\n        var merged []int\n        inv := lc + rc\n        i, j := 0, 0\n        for i < len(left) && j < len(right) {\n            if left[i] <= right[j] { merged = append(merged, left[i]); i++ } else { merged = append(merged, right[j]); inv += int64(len(left)-i); j++ }\n        }\n        merged = append(append(merged, left[i:]...), right[j:]...)\n        return merged, inv\n    }\n    _, cnt := mergeSort(nums)\n    return cnt\n}"
    }
  },
  {
    "title": "Next Permutation",
    "description": "Given an array of integers nums, rearrange the numbers into the lexicographically next greater permutation of integers. If no such arrangement is possible (i.e., the array is sorted in descending order), rearrange it as the lowest possible order (ascending). The replacement must be in-place and use only constant extra memory.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
    "hints": "Find the largest index i such that nums[i] < nums[i+1]. Then find the largest index j > i such that nums[i] < nums[j]. Swap them, then reverse the suffix from nums[i+1].",
    "testCases": [
      {
        "input": "[1,2,3]",
        "output": "[1,3,2]"
      },
      {
        "input": "[3,2,1]",
        "output": "[1,2,3]"
      },
      {
        "input": "[1,1,5]",
        "output": "[1,5,1]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [1,2,3]",
        "output": "[1,3,2]",
        "explanation": "The next permutation of [1,2,3] is [1,3,2]."
      },
      "PYTHON": {
        "input": "nums = [3,2,1]",
        "output": "[1,2,3]",
        "explanation": "As it is the last permutation, it must be rearranged into the first permutation [1,2,3]."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {void} Do not return anything, modify nums in-place instead.\n */\nvar nextPermutation = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = nextPermutation(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(nums));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def nextPermutation(self, nums: list[int]) -> None:\n        \"\"\"Do not return anything, modify nums in-place instead.\"\"\"\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.nextPermutation(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(nums).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public void nextPermutation(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.nextPermutation(nums);\n        \n        \n        \n        \n\n        \n            System.out.println(Arrays.deepToString(nums).replace(\" \", \"\"));\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    void nextPermutation(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.nextPermutation(nums);\n    \n    \n    \n    \n\n    \n        cout << \"[\";\n        auto& out = nums;\n        for(int i=0; i<out.size(); i++) {\n            cout << out[i];\n            cout << (i==out.size()-1 ? \"\" : \",\");\n        }\n        cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc nextPermutation(nums []int) {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := nextPermutation(nums)\n    \n    \n    \n    \n\n    \n        b, _ := json.Marshal(nums)\n        fmt.Println(string(b))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var nextPermutation = function(nums) {\n    let i = nums.length - 2;\n    while (i >= 0 && nums[i] >= nums[i+1]) i--;\n    if (i >= 0) {\n        let j = nums.length - 1;\n        while (nums[j] <= nums[i]) j--;\n        [nums[i], nums[j]] = [nums[j], nums[i]];\n    }\n    let l = i + 1, r = nums.length - 1;\n    while (l < r) { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }\n};",
      "PYTHON": "class Solution:\n    def nextPermutation(self, nums):\n        i = len(nums) - 2\n        while i >= 0 and nums[i] >= nums[i+1]: i -= 1\n        if i >= 0:\n            j = len(nums) - 1\n            while nums[j] <= nums[i]: j -= 1\n            nums[i], nums[j] = nums[j], nums[i]\n        l, r = i+1, len(nums)-1\n        while l < r: nums[l], nums[r] = nums[r], nums[l]; l += 1; r -= 1",
      "JAVA": "class Solution {\n    public void nextPermutation(int[] nums) {\n        int i = nums.length - 2;\n        while (i >= 0 && nums[i] >= nums[i+1]) i--;\n        if (i >= 0) {\n            int j = nums.length - 1;\n            while (nums[j] <= nums[i]) j--;\n            int t = nums[i]; nums[i] = nums[j]; nums[j] = t;\n        }\n        int l = i+1, r = nums.length-1;\n        while (l < r) { int t = nums[l]; nums[l] = nums[r]; nums[r] = t; l++; r--; }\n    }\n}",
      "CPP": "class Solution {\npublic:\n    void nextPermutation(vector<int>& nums) {\n        int n = nums.size(), i = n-2;\n        while (i >= 0 && nums[i] >= nums[i+1]) i--;\n        if (i >= 0) {\n            int j = n-1;\n            while (nums[j] <= nums[i]) j--;\n            swap(nums[i], nums[j]);\n        }\n        reverse(nums.begin()+i+1, nums.end());\n    }\n};",
      "GO": "func nextPermutation(nums []int) {\n    i := len(nums) - 2\n    for i >= 0 && nums[i] >= nums[i+1] { i-- }\n    if i >= 0 {\n        j := len(nums) - 1\n        for nums[j] <= nums[i] { j-- }\n        nums[i], nums[j] = nums[j], nums[i]\n    }\n    for l, r := i+1, len(nums)-1; l < r; l, r = l+1, r-1 { nums[l], nums[r] = nums[r], nums[l] }\n}"
    }
  },
  {
    "title": "Minimum and Maximum Sum of Pairs",
    "description": "Given an integer array nums of even length, pair up the elements such that the sum of the minimum values of all pairs is maximized, and separately, the sum of the maximum values of all pairs is minimized. Return both values.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Greedy",
      "Sorting"
    ],
    "constraints": "2 <= nums.length <= 10^5\nnums.length is even.\n1 <= nums[i] <= 10^9",
    "hints": "Sort the array. For minimum sum of pairs, pair consecutive elements and sum the smaller of each pair. For maximum sum, same pairing gives sum of larger of each pair.",
    "testCases": [
      {
        "input": "[1,4,3,2]",
        "output": "minPairSum=4, maxPairSum=6"
      },
      {
        "input": "[1,2,3,4]",
        "output": "minPairSum=4, maxPairSum=6"
      },
      {
        "input": "[1,5,2,6,3,4]",
        "output": "minPairSum=9, maxPairSum=12"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [1,4,3,2]",
        "output": "minPairSum=4, maxPairSum=6",
        "explanation": "Sorted: [1,2,3,4]. Pairs: (1,2),(3,4). Min sum = 1+3 = 4. Max sum = 2+4 = 6."
      },
      "PYTHON": {
        "input": "nums = [1,5,2,6,3,4]",
        "output": "minPairSum=9, maxPairSum=12"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number[]}\n */\nvar minMaxPairSum = function(nums) {\n    // return [minSum, maxSum]\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = minMaxPairSum(nums);\n    \n    \n    \n    \n    \n    console.log(`minPairSum=${res[0]}, maxPairSum=${res[1]}`);\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def minMaxPairSum(self, nums: list[int]) -> list[int]:\n        # return [minSum, maxSum]\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.minMaxPairSum(nums)\n    \n    \n    \n    \n    \n    print(f\"minPairSum={res[0]}, maxPairSum={res[1]}\")\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] minMaxPairSum(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.minMaxPairSum(nums);\n        \n        \n        \n        \n\n        System.out.println(\"minPairSum=\" + res[0] + \", maxPairSum=\" + res[1]);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    pair<int,int> minMaxPairSum(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.minMaxPairSum(nums);\n    \n    \n    \n    \n\n    cout << \"minPairSum=\" << res.first << \", maxPairSum=\" << res.second << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc minMaxPairSum(nums []int) [2]int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := minMaxPairSum(nums)\n    \n    \n    \n    \n\n    fmt_res := fmt.Sprintf(\"minPairSum=%d, maxPairSum=%d\", res[0], res[1]); fmt.Println(fmt_res)\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var minMaxPairSum = function(nums) {\n    nums.sort((a, b) => a - b);\n    let minSum = 0, maxSum = 0;\n    for (let i = 0; i < nums.length; i += 2) {\n        minSum += nums[i];\n        maxSum += nums[i+1];\n    }\n    return [minSum, maxSum];\n};",
      "PYTHON": "class Solution:\n    def minMaxPairSum(self, nums):\n        nums.sort()\n        min_sum = sum(nums[i] for i in range(0, len(nums), 2))\n        max_sum = sum(nums[i] for i in range(1, len(nums), 2))\n        return [min_sum, max_sum]",
      "JAVA": "class Solution {\n    public int[] minMaxPairSum(int[] nums) {\n        Arrays.sort(nums);\n        int mn = 0, mx = 0;\n        for (int i = 0; i < nums.length; i += 2) { mn += nums[i]; mx += nums[i+1]; }\n        return new int[]{mn, mx};\n    }\n}",
      "CPP": "class Solution {\npublic:\n    pair<int,int> minMaxPairSum(vector<int>& nums) {\n        sort(nums.begin(), nums.end());\n        int mn = 0, mx = 0;\n        for (int i = 0; i < nums.size(); i += 2) { mn += nums[i]; mx += nums[i+1]; }\n        return {mn, mx};\n    }\n};",
      "GO": "func minMaxPairSum(nums []int) [2]int {\n    sort.Ints(nums)\n    mn, mx := 0, 0\n    for i := 0; i < len(nums); i += 2 { mn += nums[i]; mx += nums[i+1] }\n    return [2]int{mn, mx}\n}"
    }
  },
  {
    "title": "Best Time to Buy and Sell Stock",
    "description": "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy and a single day in the future to sell. Return the maximum profit you can achieve. If you cannot achieve any profit, return 0.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Dynamic Programming"
    ],
    "constraints": "1 <= prices.length <= 10^5\n0 <= prices[i] <= 10^4",
    "hints": "Track the minimum price seen so far. At each step, update profit = max(profit, currentPrice - minPrice).",
    "testCases": [
      {
        "input": "[7,1,5,3,6,4]",
        "output": "5"
      },
      {
        "input": "[7,6,4,3,1]",
        "output": "0"
      },
      {
        "input": "[1,2]",
        "output": "1"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy on day 2 (price=1) and sell on day 5 (price=6), profit = 6-1 = 5."
      },
      "PYTHON": {
        "input": "prices = [7,6,4,3,1]",
        "output": "0",
        "explanation": "No profitable transactions are possible."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} prices\n * @return {number}\n */\nvar maxProfit = function(prices) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = maxProfit(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def maxProfit(self, prices: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.maxProfit(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int maxProfit(int[] prices) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.maxProfit(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.maxProfit(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc maxProfit(prices []int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := maxProfit(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var maxProfit = function(prices) {\n    let minPrice = Infinity, maxProfit = 0;\n    for (const p of prices) {\n        if (p < minPrice) minPrice = p;\n        else if (p - minPrice > maxProfit) maxProfit = p - minPrice;\n    }\n    return maxProfit;\n};",
      "PYTHON": "class Solution:\n    def maxProfit(self, prices):\n        min_price, max_profit = float('inf'), 0\n        for p in prices:\n            if p < min_price: min_price = p\n            elif p - min_price > max_profit: max_profit = p - min_price\n        return max_profit",
      "JAVA": "class Solution {\n    public int maxProfit(int[] prices) {\n        int minPrice = Integer.MAX_VALUE, maxProfit = 0;\n        for (int p : prices) {\n            if (p < minPrice) minPrice = p;\n            else maxProfit = Math.max(maxProfit, p - minPrice);\n        }\n        return maxProfit;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int maxProfit(vector<int>& prices) {\n        int minP = INT_MAX, maxP = 0;\n        for (int p : prices) {\n            minP = min(minP, p);\n            maxP = max(maxP, p - minP);\n        }\n        return maxP;\n    }\n};",
      "GO": "func maxProfit(prices []int) int {\n    minP, maxP := prices[0], 0\n    for _, p := range prices[1:] {\n        if p < minP { minP = p } else if p-minP > maxP { maxP = p - minP }\n    }\n    return maxP\n}"
    }
  },
  {
    "title": "Rearrange Array: Move Negatives to One Side",
    "description": "Given an array of positive and negative numbers, rearrange the array so that all negative numbers appear before all positive numbers. The order of appearance of elements within each group does not need to be maintained.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Two Pointers"
    ],
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9\nnums[i] != 0",
    "hints": "Use a two-pointer approach: one pointer from the left looking for a positive number, one from the right looking for a negative number. Swap them.",
    "testCases": [
      {
        "input": "[-1,2,-3,4,5,-6]",
        "output": "[-1,-6,-3,4,5,2]"
      },
      {
        "input": "[1,2,3,-4,-5]",
        "output": "[-4,-5,3,2,1]"
      },
      {
        "input": "[-1,-2,-3]",
        "output": "[-1,-2,-3]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [-1,2,-3,4,5,-6]",
        "output": "[-1,-6,-3,4,5,2]",
        "explanation": "All negatives are moved to the left. Relative order may vary."
      },
      "PYTHON": {
        "input": "nums = [1,2,3,-4,-5]",
        "output": "[-4,-5,3,2,1]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {void} Modify in-place.\n */\nvar moveNegatives = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = moveNegatives(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(nums));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def moveNegatives(self, nums: list[int]) -> None:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.moveNegatives(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(nums).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public void moveNegatives(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.moveNegatives(nums);\n        \n        \n        \n        \n\n        \n            System.out.println(Arrays.deepToString(nums).replace(\" \", \"\"));\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    void moveNegatives(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.moveNegatives(nums);\n    \n    \n    \n    \n\n    \n        cout << \"[\";\n        auto& out = nums;\n        for(int i=0; i<out.size(); i++) {\n            cout << out[i];\n            cout << (i==out.size()-1 ? \"\" : \",\");\n        }\n        cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc moveNegatives(nums []int) {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := moveNegatives(nums)\n    \n    \n    \n    \n\n    \n        b, _ := json.Marshal(nums)\n        fmt.Println(string(b))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var moveNegatives = function(nums) {\n    let l = 0, r = nums.length - 1;\n    while (l <= r) {\n        if (nums[l] < 0) { l++; }\n        else if (nums[r] >= 0) { r--; }\n        else { [nums[l], nums[r]] = [nums[r], nums[l]]; l++; r--; }\n    }\n};",
      "PYTHON": "class Solution:\n    def moveNegatives(self, nums):\n        l, r = 0, len(nums) - 1\n        while l <= r:\n            if nums[l] < 0: l += 1\n            elif nums[r] >= 0: r -= 1\n            else: nums[l], nums[r] = nums[r], nums[l]; l += 1; r -= 1",
      "JAVA": "class Solution {\n    public void moveNegatives(int[] nums) {\n        int l = 0, r = nums.length - 1;\n        while (l <= r) {\n            if (nums[l] < 0) l++;\n            else if (nums[r] >= 0) r--;\n            else { int t = nums[l]; nums[l] = nums[r]; nums[r] = t; l++; r--; }\n        }\n    }\n}",
      "CPP": "class Solution {\npublic:\n    void moveNegatives(vector<int>& nums) {\n        int l = 0, r = nums.size() - 1;\n        while (l <= r) {\n            if (nums[l] < 0) l++;\n            else if (nums[r] >= 0) r--;\n            else { swap(nums[l], nums[r]); l++; r--; }\n        }\n    }\n};",
      "GO": "func moveNegatives(nums []int) {\n    l, r := 0, len(nums)-1\n    for l <= r {\n        if nums[l] < 0 { l++ } else if nums[r] >= 0 { r-- } else { nums[l], nums[r] = nums[r], nums[l]; l++; r-- }\n    }\n}"
    }
  },
  {
    "title": "Check if Array is Sorted and Rotated",
    "description": "Given an array nums, return true if the array was originally sorted in non-decreasing order and then possibly rotated some number of positions (including zero). Otherwise, return false. There may be duplicate values in the array.",
    "difficulty": "EASY",
    "tags": [
      "Array"
    ],
    "constraints": "1 <= nums.length <= 100\n1 <= nums[i] <= 100",
    "hints": "Count the number of 'break points' where nums[i] > nums[i+1]. A sorted-and-rotated array can have at most one such break point (wrapping around from last to first element).",
    "testCases": [
      {
        "input": "[3,4,5,1,2]",
        "output": "true"
      },
      {
        "input": "[2,1,3,4]",
        "output": "false"
      },
      {
        "input": "[1,2,3]",
        "output": "true"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [3,4,5,1,2]",
        "output": "true",
        "explanation": "[1,2,3,4,5] rotated 3 times gives [3,4,5,1,2]."
      },
      "PYTHON": {
        "input": "nums = [2,1,3,4]",
        "output": "false",
        "explanation": "This cannot be obtained from a sorted array by rotation."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {boolean}\n */\nvar check = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = check(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def check(self, nums: list[int]) -> bool:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.check(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public boolean check(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.check(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool check(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.check(nums);\n    \n    \n    \n    \n\n    cout << (res ? \"true\" : \"false\") << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc check(nums []int) bool {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := check(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var check = function(nums) {\n    let count = 0, n = nums.length;\n    for (let i = 0; i < n; i++) {\n        if (nums[i] > nums[(i+1) % n]) count++;\n    }\n    return count <= 1;\n};",
      "PYTHON": "class Solution:\n    def check(self, nums):\n        n = len(nums)\n        count = sum(1 for i in range(n) if nums[i] > nums[(i+1) % n])\n        return count <= 1",
      "JAVA": "class Solution {\n    public boolean check(int[] nums) {\n        int n = nums.length, count = 0;\n        for (int i = 0; i < n; i++)\n            if (nums[i] > nums[(i+1) % n]) count++;\n        return count <= 1;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    bool check(vector<int>& nums) {\n        int n = nums.size(), count = 0;\n        for (int i = 0; i < n; i++)\n            if (nums[i] > nums[(i+1) % n]) count++;\n        return count <= 1;\n    }\n};",
      "GO": "func check(nums []int) bool {\n    n, count := len(nums), 0\n    for i := 0; i < n; i++ {\n        if nums[i] > nums[(i+1)%n] { count++ }\n    }\n    return count <= 1\n}"
    }
  },
  {
    "title": "Add Two Numbers Represented as Arrays",
    "description": "Given two non-negative integers represented as arrays of digits (most significant digit first), return their sum as an array of digits. The arrays do not contain any leading zeros, except for the number 0 itself.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Math",
      "Simulation"
    ],
    "constraints": "1 <= nums1.length, nums2.length <= 10^4\n0 <= nums1[i], nums2[i] <= 9\nnums1 and nums2 do not have leading zeros.",
    "hints": "Start adding from the last digit. Handle carry as you move left. If one array is exhausted, continue with the other. Don't forget the final carry.",
    "testCases": [
      {
        "input": "nums1 = [1,2,3], nums2 = [4,5,6]",
        "output": "[5,7,9]"
      },
      {
        "input": "nums1 = [9,9,9], nums2 = [1]",
        "output": "[1,0,0,0]"
      },
      {
        "input": "nums1 = [0], nums2 = [0]",
        "output": "[0]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums1 = [1,2,3], nums2 = [4,5,6]",
        "output": "[5,7,9]",
        "explanation": "123 + 456 = 579"
      },
      "PYTHON": {
        "input": "nums1 = [9,9,9], nums2 = [1]",
        "output": "[1,0,0,0]",
        "explanation": "999 + 1 = 1000"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number[]}\n */\nvar addArrays = function(nums1, nums2) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    const arrays = input.match(/\\[.*?\\]/g).map(JSON.parse); res = addArrays(arrays[0], arrays[1]);\n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def addArrays(self, nums1: list[int], nums2: list[int]) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    import re; arrays = [json.loads(a) for a in re.findall(r'\\[.*?\\]', line)]; res = sol.addArrays(arrays[0], arrays[1])\n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] addArrays(int[] nums1, int[] nums2) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n            String[] parts = line.split(\"\\]\");\n            int[] n1 = Arrays.stream(parts[0].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            int[] n2 = Arrays.stream(parts[1].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.addArrays(n1, n2);\n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> addArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n        auto pos1 = line.find('['), pos2 = line.find(']', pos1), pos3 = line.find('[', pos2), pos4 = line.find(']', pos3);\n        auto s1 = line.substr(pos1+1, pos2-pos1-1), s2 = line.substr(pos3+1, pos4-pos3-1);\n        replace(s1.begin(), s1.end(), ',', ' '); replace(s2.begin(), s2.end(), ',', ' ');\n        stringstream ss1(s1), ss2(s2);\n        int val; vector<int> n1, n2;\n        while(ss1 >> val) n1.push_back(val);\n        while(ss2 >> val) n2.push_back(val);\n        auto res = sol.addArrays(n1, n2);\n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc addArrays(nums1 []int, nums2 []int) []int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n        parts := strings.Split(line, \"]\")\n        var n1, n2 []int\n        json.Unmarshal([]byte(parts[0]+\"]\"), &n1)\n        if len(parts) > 1 {\n            s2 := parts[1]\n            if strings.Contains(s2, \"[\") {\n                json.Unmarshal([]byte(s2[strings.Index(s2, \"[\"):]+\"]\"), &n2)\n            }\n        }\n        res1, res2 := addArrays(n1, n2)\n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var addArrays = function(nums1, nums2) {\n    let i = nums1.length - 1, j = nums2.length - 1, carry = 0;\n    const result = [];\n    while (i >= 0 || j >= 0 || carry) {\n        const sum = (i >= 0 ? nums1[i--] : 0) + (j >= 0 ? nums2[j--] : 0) + carry;\n        carry = Math.floor(sum / 10);\n        result.unshift(sum % 10);\n    }\n    return result;\n};",
      "PYTHON": "class Solution:\n    def addArrays(self, nums1, nums2):\n        i, j, carry, result = len(nums1)-1, len(nums2)-1, 0, []\n        while i >= 0 or j >= 0 or carry:\n            s = (nums1[i] if i >= 0 else 0) + (nums2[j] if j >= 0 else 0) + carry\n            carry, rem = divmod(s, 10)\n            result.append(rem)\n            i -= 1; j -= 1\n        return result[::-1]",
      "JAVA": "class Solution {\n    public int[] addArrays(int[] a, int[] b) {\n        int i = a.length-1, j = b.length-1, carry = 0;\n        List<Integer> res = new ArrayList<>();\n        while (i >= 0 || j >= 0 || carry > 0) {\n            int sum = (i >= 0 ? a[i--] : 0) + (j >= 0 ? b[j--] : 0) + carry;\n            carry = sum / 10; res.add(0, sum % 10);\n        }\n        return res.stream().mapToInt(x->x).toArray();\n    }\n}",
      "CPP": "class Solution {\npublic:\n    vector<int> addArrays(vector<int>& a, vector<int>& b) {\n        int i = a.size()-1, j = b.size()-1, carry = 0;\n        vector<int> res;\n        while (i >= 0 || j >= 0 || carry) {\n            int s = (i >= 0 ? a[i--] : 0) + (j >= 0 ? b[j--] : 0) + carry;\n            carry = s / 10; res.insert(res.begin(), s % 10);\n        }\n        return res;\n    }\n};",
      "GO": "func addArrays(a, b []int) []int {\n    i, j, carry := len(a)-1, len(b)-1, 0\n    var res []int\n    for i >= 0 || j >= 0 || carry > 0 {\n        s := carry\n        if i >= 0 { s += a[i]; i-- }\n        if j >= 0 { s += b[j]; j-- }\n        carry = s / 10\n        res = append([]int{s % 10}, res...)\n    }\n    return res\n}"
    }
  },
  {
    "title": "Wave Print a Matrix",
    "description": "Given a 2D matrix, print the elements in a wave-like pattern column by column. For even-indexed columns (0-based), traverse top to bottom; for odd-indexed columns, traverse bottom to top.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Matrix"
    ],
    "constraints": "1 <= m, n <= 100\n-10^9 <= matrix[i][j] <= 10^9",
    "hints": "Iterate column by column. For column index i: if i is even, go top-to-bottom (row 0 to m-1); if i is odd, go bottom-to-top (row m-1 to 0).",
    "testCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,4,7,8,5,2,3,6,9]"
      },
      {
        "input": "[[1,2],[3,4]]",
        "output": "[1,3,4,2]"
      },
      {
        "input": "[[5]]",
        "output": "[5]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,4,7,8,5,2,3,6,9]",
        "explanation": "Col 0: 1,4,7 (top-down). Col 1: 8,5,2 (bottom-up). Col 2: 3,6,9 (top-down)."
      },
      "PYTHON": {
        "input": "matrix = [[1,2],[3,4]]",
        "output": "[1,3,4,2]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nvar wavePrint = function(matrix) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    const matrix = JSON.parse(input); res = wavePrint(matrix);\n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def wavePrint(self, matrix: list[list[int]]) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    matrix = json.loads(line); res = sol.wavePrint(matrix)\n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public List<Integer> wavePrint(int[][] matrix) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n            String s = line.substring(1, line.length()-1);\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = s.indexOf('[', i)) != -1) {\n                int j = s.indexOf(']', i);\n                String row = s.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.wavePrint(matrix);\n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> wavePrint(vector<vector<int>>& matrix) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n        vector<vector<int>> matrix;\n        size_t pos = 0;\n        while((pos = line.find('[', pos + 1)) != string::npos) {\n            if (line[pos+1] == '[') continue;\n            size_t end = line.find(']', pos);\n            if(end == string::npos) break;\n            string rowStr = line.substr(pos+1, end-pos-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int val; vector<int> row;\n            while(ssr >> val) row.push_back(val);\n            if(!row.empty()) matrix.push_back(row);\n        }\n        auto res = sol.wavePrint(matrix);\n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc wavePrint(matrix [][]int) []int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    var matrix [][]int; json.Unmarshal([]byte(line), &matrix); res := wavePrint(matrix)\n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var wavePrint = function(matrix) {\n    const m = matrix.length, n = matrix[0].length, res = [];\n    for (let col = 0; col < n; col++) {\n        if (col % 2 === 0) {\n            for (let row = 0; row < m; row++) res.push(matrix[row][col]);\n        } else {\n            for (let row = m-1; row >= 0; row--) res.push(matrix[row][col]);\n        }\n    }\n    return res;\n};",
      "PYTHON": "class Solution:\n    def wavePrint(self, matrix):\n        m, n = len(matrix), len(matrix[0])\n        res = []\n        for col in range(n):\n            if col % 2 == 0:\n                for row in range(m): res.append(matrix[row][col])\n            else:\n                for row in range(m-1, -1, -1): res.append(matrix[row][col])\n        return res",
      "JAVA": "class Solution {\n    public List<Integer> wavePrint(int[][] m) {\n        List<Integer> res = new ArrayList<>();\n        int rows = m.length, cols = m[0].length;\n        for (int c = 0; c < cols; c++) {\n            if (c % 2 == 0) { for (int r = 0; r < rows; r++) res.add(m[r][c]); }\n            else { for (int r = rows-1; r >= 0; r--) res.add(m[r][c]); }\n        }\n        return res;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    vector<int> wavePrint(vector<vector<int>>& mat) {\n        vector<int> res;\n        int m = mat.size(), n = mat[0].size();\n        for (int c = 0; c < n; c++) {\n            if (c % 2 == 0) for (int r = 0; r < m; r++) res.push_back(mat[r][c]);\n            else for (int r = m-1; r >= 0; r--) res.push_back(mat[r][c]);\n        }\n        return res;\n    }\n};",
      "GO": "func wavePrint(matrix [][]int) []int {\n    var res []int\n    m, n := len(matrix), len(matrix[0])\n    for c := 0; c < n; c++ {\n        if c%2 == 0 { for r := 0; r < m; r++ { res = append(res, matrix[r][c]) } } else { for r := m-1; r >= 0; r-- { res = append(res, matrix[r][c]) } }\n    }\n    return res\n}"
    }
  },
  {
    "title": "Spiral Matrix",
    "description": "Given an m x n matrix, return all elements of the matrix in spiral order (clockwise from the outside).",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Matrix",
      "Simulation"
    ],
    "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 10\n-100 <= matrix[i][j] <= 100",
    "hints": "Use four boundaries: top, bottom, left, right. Traverse right across top, down the right side, left across bottom, up the left side. Shrink boundaries after each pass.",
    "testCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]"
      },
      {
        "input": "[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"
      },
      {
        "input": "[[1]]",
        "output": "[1]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]",
        "explanation": "Starting from top-left, traverse: right → down → left → up, peeling off layers."
      },
      "PYTHON": {
        "input": "matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} matrix\n * @return {number[]}\n */\nvar spiralOrder = function(matrix) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    const matrix = JSON.parse(input); res = spiralOrder(matrix);\n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def spiralOrder(self, matrix: list[list[int]]) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    matrix = json.loads(line); res = sol.spiralOrder(matrix)\n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public List<Integer> spiralOrder(int[][] matrix) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n            String s = line.substring(1, line.length()-1);\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = s.indexOf('[', i)) != -1) {\n                int j = s.indexOf(']', i);\n                String row = s.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.spiralOrder(matrix);\n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& matrix) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n        vector<vector<int>> matrix;\n        size_t pos = 0;\n        while((pos = line.find('[', pos + 1)) != string::npos) {\n            if (line[pos+1] == '[') continue;\n            size_t end = line.find(']', pos);\n            if(end == string::npos) break;\n            string rowStr = line.substr(pos+1, end-pos-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int val; vector<int> row;\n            while(ssr >> val) row.push_back(val);\n            if(!row.empty()) matrix.push_back(row);\n        }\n        auto res = sol.spiralOrder(matrix);\n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc spiralOrder(matrix [][]int) []int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    var matrix [][]int; json.Unmarshal([]byte(line), &matrix); res := spiralOrder(matrix)\n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var spiralOrder = function(matrix) {\n    const res = [];\n    let top = 0, bottom = matrix.length-1, left = 0, right = matrix[0].length-1;\n    while (top <= bottom && left <= right) {\n        for (let i = left; i <= right; i++) res.push(matrix[top][i]);\n        top++;\n        for (let i = top; i <= bottom; i++) res.push(matrix[i][right]);\n        right--;\n        if (top <= bottom) { for (let i = right; i >= left; i--) res.push(matrix[bottom][i]); bottom--; }\n        if (left <= right) { for (let i = bottom; i >= top; i--) res.push(matrix[i][left]); left++; }\n    }\n    return res;\n};",
      "PYTHON": "class Solution:\n    def spiralOrder(self, matrix):\n        res = []\n        top, bottom, left, right = 0, len(matrix)-1, 0, len(matrix[0])-1\n        while top <= bottom and left <= right:\n            for i in range(left, right+1): res.append(matrix[top][i])\n            top += 1\n            for i in range(top, bottom+1): res.append(matrix[i][right])\n            right -= 1\n            if top <= bottom:\n                for i in range(right, left-1, -1): res.append(matrix[bottom][i])\n                bottom -= 1\n            if left <= right:\n                for i in range(bottom, top-1, -1): res.append(matrix[i][left])\n                left += 1\n        return res",
      "JAVA": "class Solution {\n    public List<Integer> spiralOrder(int[][] mat) {\n        List<Integer> res = new ArrayList<>();\n        int top=0,bottom=mat.length-1,left=0,right=mat[0].length-1;\n        while(top<=bottom && left<=right){\n            for(int i=left;i<=right;i++) res.add(mat[top][i]); top++;\n            for(int i=top;i<=bottom;i++) res.add(mat[i][right]); right--;\n            if(top<=bottom){for(int i=right;i>=left;i--) res.add(mat[bottom][i]); bottom--;}\n            if(left<=right){for(int i=bottom;i>=top;i--) res.add(mat[i][left]); left++;}\n        }\n        return res;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    vector<int> spiralOrder(vector<vector<int>>& mat) {\n        vector<int> res;\n        int top=0,bottom=mat.size()-1,left=0,right=mat[0].size()-1;\n        while(top<=bottom && left<=right){\n            for(int i=left;i<=right;i++) res.push_back(mat[top][i]); top++;\n            for(int i=top;i<=bottom;i++) res.push_back(mat[i][right]); right--;\n            if(top<=bottom){for(int i=right;i>=left;i--) res.push_back(mat[bottom][i]); bottom--;}\n            if(left<=right){for(int i=bottom;i>=top;i--) res.push_back(mat[i][left]); left++;}\n        }\n        return res;\n    }\n};",
      "GO": "func spiralOrder(matrix [][]int) []int {\n    var res []int\n    top,bottom,left,right := 0,len(matrix)-1,0,len(matrix[0])-1\n    for top<=bottom && left<=right {\n        for i:=left;i<=right;i++{res=append(res,matrix[top][i])}; top++\n        for i:=top;i<=bottom;i++{res=append(res,matrix[i][right])}; right--\n        if top<=bottom{for i:=right;i>=left;i--{res=append(res,matrix[bottom][i])}; bottom--}\n        if left<=right{for i:=bottom;i>=top;i--{res=append(res,matrix[i][left])}; left++}\n    }\n    return res\n}"
    }
  },
  {
    "title": "Rotate Image (Matrix by 90 Degrees Clockwise)",
    "description": "You are given an n x n 2D matrix representing an image. Rotate the matrix 90 degrees clockwise in-place. You must rotate the matrix in-place without using another matrix.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Math",
      "Matrix"
    ],
    "constraints": "n == matrix.length == matrix[i].length\n1 <= n <= 20\n-1000 <= matrix[i][j] <= 1000",
    "hints": "First transpose the matrix (swap matrix[i][j] with matrix[j][i]), then reverse each row.",
    "testCases": [
      {
        "input": "[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]"
      },
      {
        "input": "[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
      },
      {
        "input": "[[1]]",
        "output": "[[1]]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": "Transpose then reverse each row: [[1,4,7],[2,5,8],[3,6,9]] → [[7,4,1],[8,5,2],[9,6,3]]."
      },
      "PYTHON": {
        "input": "matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} matrix\n * @return {void} Do not return anything, modify matrix in-place instead.\n */\nvar rotate = function(matrix) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    const matrix = JSON.parse(input); res = rotate(matrix);\n    \n    \n    \n    console.log(JSON.stringify(matrix));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def rotate(self, matrix: list[list[int]]) -> None:\n        \"\"\"Do not return anything, modify matrix in-place instead.\"\"\"\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    matrix = json.loads(line); res = sol.rotate(matrix)\n    \n    \n    \n    print(json.dumps(matrix).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public void rotate(int[][] matrix) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n            String s = line.substring(1, line.length()-1);\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = s.indexOf('[', i)) != -1) {\n                int j = s.indexOf(']', i);\n                String row = s.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.rotate(matrix);\n        \n        \n\n        \n            System.out.println(Arrays.deepToString(matrix).replace(\" \", \"\"));\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    void rotate(vector<vector<int>>& matrix) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n        vector<vector<int>> matrix;\n        size_t pos = 0;\n        while((pos = line.find('[', pos + 1)) != string::npos) {\n            if (line[pos+1] == '[') continue;\n            size_t end = line.find(']', pos);\n            if(end == string::npos) break;\n            string rowStr = line.substr(pos+1, end-pos-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int val; vector<int> row;\n            while(ssr >> val) row.push_back(val);\n            if(!row.empty()) matrix.push_back(row);\n        }\n        auto res = sol.rotate(matrix);\n    \n    \n\n    \n        cout << \"[\";\n        auto& out = matrix;\n        for(int i=0; i<out.size(); i++) {\n            \n            cout << \"[\";\n            for(int j=0; j<out[i].size(); j++) {\n                cout << out[i][j] << (j==out[i].size()-1 ? \"\" : \",\");\n            }\n            cout << \"]\";\n            cout << (i==out.size()-1 ? \"\" : \",\");\n        }\n        cout << \"]\" << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc rotate(matrix [][]int) {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    var matrix [][]int; json.Unmarshal([]byte(line), &matrix); res := rotate(matrix)\n    \n    \n\n    \n        b, _ := json.Marshal(matrix)\n        fmt.Println(string(b))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var rotate = function(matrix) {\n    const n = matrix.length;\n    // Transpose\n    for (let i = 0; i < n; i++)\n        for (let j = i+1; j < n; j++)\n            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];\n    // Reverse each row\n    for (let i = 0; i < n; i++) matrix[i].reverse();\n};",
      "PYTHON": "class Solution:\n    def rotate(self, matrix):\n        n = len(matrix)\n        for i in range(n):\n            for j in range(i+1, n):\n                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]\n        for row in matrix: row.reverse()",
      "JAVA": "class Solution {\n    public void rotate(int[][] m) {\n        int n = m.length;\n        for (int i=0;i<n;i++) for(int j=i+1;j<n;j++){int t=m[i][j];m[i][j]=m[j][i];m[j][i]=t;}\n        for (int[] row : m) {int l=0,r=row.length-1;while(l<r){int t=row[l];row[l]=row[r];row[r]=t;l++;r--;}}\n    }\n}",
      "CPP": "class Solution {\npublic:\n    void rotate(vector<vector<int>>& m) {\n        int n = m.size();\n        for (int i=0;i<n;i++) for(int j=i+1;j<n;j++) swap(m[i][j],m[j][i]);\n        for (auto& row : m) reverse(row.begin(), row.end());\n    }\n};",
      "GO": "func rotate(matrix [][]int) {\n    n := len(matrix)\n    for i:=0;i<n;i++ { for j:=i+1;j<n;j++ { matrix[i][j],matrix[j][i]=matrix[j][i],matrix[i][j] } }\n    for i:=0;i<n;i++ { for l,r:=0,n-1;l<r;l,r=l+1,r-1 { matrix[i][l],matrix[i][r]=matrix[i][r],matrix[i][l] } }\n}"
    }
  },
  {
    "title": "Search a 2D Matrix",
    "description": "Write an efficient algorithm to search for a target value in an m x n integer matrix. This matrix has the following properties: integers in each row are sorted from left to right, and the first integer of each row is greater than the last integer of the previous row.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search",
      "Matrix"
    ],
    "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= m, n <= 100\n-10^4 <= matrix[i][j] <= 10^4\n-10^4 <= target <= 10^4",
    "hints": "Treat the matrix as a flattened sorted array and apply binary search. Map index mid to row = mid / n, col = mid % n.",
    "testCases": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true"
      },
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false"
      },
      {
        "input": "matrix = [[1]], target = 1",
        "output": "true"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true"
      },
      "PYTHON": {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13",
        "output": "false"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrix = function(matrix, target) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    const matrix = JSON.parse(input.match(/\\[\\[.*?\\]\\]/)[0]); const target = parseInt(input.split('target =')[1]); res = searchMatrix(matrix, target);\n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    import re; matrix = json.loads(re.search(r'\\[\\[.*?\\]\\]', line).group()); target = int(line.split('target =')[1]); res = sol.searchMatrix(matrix, target)\n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n            String mPart = line.substring(line.indexOf(\"[[\"), line.indexOf(\"]]\")+2);\n            int target = Integer.parseInt(line.split(\"target =\")[1].trim());\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = mPart.indexOf('[', i+1)) != -1) {\n                if(mPart.charAt(i+1) == '[') continue;\n                int j = mPart.indexOf(']', i);\n                String row = mPart.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.searchMatrix(matrix, target);\n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n        size_t mStart = line.find(\"[[\"), mEnd = line.find(\"]]\", mStart) + 2;\n        string mStr = line.substr(mStart, mEnd - mStart);\n        int target = stoi(line.substr(line.find(\"target =\") + 8));\n        vector<vector<int>> matrix;\n        size_t p = 0;\n        while((p = mStr.find('[', p + 1)) != string::npos) {\n            if(mStr[p+1] == '[') continue;\n            size_t end = mStr.find(']', p);\n            string rowStr = mStr.substr(p+1, end-p-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int v; vector<int> row;\n            while(ssr >> v) row.push_back(v);\n            matrix.push_back(row);\n        }\n        auto res = sol.searchMatrix(matrix, target);\n    \n\n    cout << (res ? \"true\" : \"false\") << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc searchMatrix(matrix [][]int, target int) bool {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n        var matrix [][]int\n        mIdx := strings.Index(line, \"[[\")\n        mEnd := strings.Index(line, \"]]\") + 2\n        json.Unmarshal([]byte(line[mIdx:mEnd]), &matrix)\n        tIdx := strings.Index(line, \"target =\") + 8\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := searchMatrix(matrix, target)\n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var searchMatrix = function(matrix, target) {\n    const m = matrix.length, n = matrix[0].length;\n    let lo = 0, hi = m * n - 1;\n    while (lo <= hi) {\n        const mid = (lo + hi) >> 1;\n        const val = matrix[Math.floor(mid/n)][mid%n];\n        if (val === target) return true;\n        if (val < target) lo = mid + 1;\n        else hi = mid - 1;\n    }\n    return false;\n};",
      "PYTHON": "class Solution:\n    def searchMatrix(self, matrix, target):\n        m, n = len(matrix), len(matrix[0])\n        lo, hi = 0, m*n-1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            val = matrix[mid//n][mid%n]\n            if val == target: return True\n            elif val < target: lo = mid+1\n            else: hi = mid-1\n        return False",
      "JAVA": "class Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        int m=matrix.length, n=matrix[0].length, lo=0, hi=m*n-1;\n        while (lo<=hi) {\n            int mid=(lo+hi)/2, val=matrix[mid/n][mid%n];\n            if (val==target) return true;\n            else if (val<target) lo=mid+1;\n            else hi=mid-1;\n        }\n        return false;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        int m=matrix.size(), n=matrix[0].size(), lo=0, hi=m*n-1;\n        while (lo<=hi) {\n            int mid=(lo+hi)/2, val=matrix[mid/n][mid%n];\n            if (val==target) return true;\n            else if (val<target) lo=mid+1;\n            else hi=mid-1;\n        }\n        return false;\n    }\n};",
      "GO": "func searchMatrix(matrix [][]int, target int) bool {\n    m, n := len(matrix), len(matrix[0])\n    lo, hi := 0, m*n-1\n    for lo <= hi {\n        mid := (lo+hi)/2; val := matrix[mid/n][mid%n]\n        if val == target { return true } else if val < target { lo = mid+1 } else { hi = mid-1 }\n    }\n    return false\n}"
    }
  },
  {
    "title": "Find First and Last Position of Element in Sorted Array",
    "description": "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "0 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9\nnums is a non-decreasing array.\n-10^9 <= target <= 10^9",
    "hints": "Run binary search twice: once to find the leftmost occurrence and once to find the rightmost occurrence.",
    "testCases": [
      {
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "output": "[3,4]"
      },
      {
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "output": "[-1,-1]"
      },
      {
        "input": "nums = [], target = 0",
        "output": "[-1,-1]"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [5,7,7,8,8,10], target = 8",
        "output": "[3,4]",
        "explanation": "8 first appears at index 3 and last appears at index 4."
      },
      "PYTHON": {
        "input": "nums = [5,7,7,8,8,10], target = 6",
        "output": "[-1,-1]",
        "explanation": "6 is not in the array."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number[]}\n */\nvar searchRange = function(nums, target) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    \n    const nums = JSON.parse(input.match(/\\[.*?\\]/)[0]); const target = parseInt(input.split('=')[2] || input.split(',')[1].split('=')[1]); res = searchRange(nums, target);\n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def searchRange(self, nums: list[int], target: int) -> list[int]:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    \n    import re; nums = json.loads(re.search(r'\\[.*?\\]', line).group()); target = int(line.split('=')[-1]); res = sol.searchRange(nums, target)\n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int[] searchRange(int[] nums, int target) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n        \n            String aPart = line.substring(line.indexOf(\"[\"), line.indexOf(\"]\")+1);\n            int target = Integer.parseInt(line.substring(line.lastIndexOf(\"=\") + 1).trim());\n            int[] nums = Arrays.stream(aPart.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.searchRange(nums, target);\n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n    \n        size_t aStart = line.find('['), aEnd = line.find(']') + 1;\n        string aStr = line.substr(aStart, aEnd - aStart);\n        int target = stoi(line.substr(line.find_last_of('=') + 1));\n        aStr.erase(remove(aStr.begin(), aStr.end(), '['), aStr.end());\n        aStr.erase(remove(aStr.begin(), aStr.end(), ']'), aStr.end());\n        replace(aStr.begin(), aStr.end(), ',', ' ');\n        stringstream ss(aStr);\n        int v; vector<int> nums;\n        while(ss >> v) nums.push_back(v);\n        auto res = sol.searchRange(nums, target);\n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc searchRange(nums []int, target int) []int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n    \n        var nums []int\n        aIdx := strings.Index(line, \"[\")\n        aEnd := strings.Index(line, \"]\") + 1\n        json.Unmarshal([]byte(line[aIdx:aEnd]), &nums)\n        tIdx := strings.LastIndex(line, \"=\") + 1\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := searchRange(nums, target)\n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var searchRange = function(nums, target) {\n    function bound(isLeft) {\n        let lo = 0, hi = nums.length - 1, res = -1;\n        while (lo <= hi) {\n            const mid = (lo + hi) >> 1;\n            if (nums[mid] === target) { res = mid; if (isLeft) hi = mid - 1; else lo = mid + 1; }\n            else if (nums[mid] < target) lo = mid + 1;\n            else hi = mid - 1;\n        }\n        return res;\n    }\n    return [bound(true), bound(false)];\n};",
      "PYTHON": "class Solution:\n    def searchRange(self, nums, target):\n        def bound(left):\n            lo, hi, res = 0, len(nums)-1, -1\n            while lo <= hi:\n                mid = (lo+hi)//2\n                if nums[mid] == target:\n                    res = mid\n                    if left: hi = mid-1\n                    else: lo = mid+1\n                elif nums[mid] < target: lo = mid+1\n                else: hi = mid-1\n            return res\n        return [bound(True), bound(False)]",
      "JAVA": "class Solution {\n    public int[] searchRange(int[] nums, int target) {\n        return new int[]{bound(nums,target,true), bound(nums,target,false)};\n    }\n    int bound(int[] nums, int t, boolean left) {\n        int lo=0,hi=nums.length-1,res=-1;\n        while(lo<=hi){int mid=(lo+hi)/2;if(nums[mid]==t){res=mid;if(left)hi=mid-1;else lo=mid+1;}else if(nums[mid]<t)lo=mid+1;else hi=mid-1;}\n        return res;\n    }\n}",
      "CPP": "class Solution {\n    int bound(vector<int>& nums, int t, bool left) {\n        int lo=0,hi=nums.size()-1,res=-1;\n        while(lo<=hi){int mid=(lo+hi)/2;if(nums[mid]==t){res=mid;if(left)hi=mid-1;else lo=mid+1;}else if(nums[mid]<t)lo=mid+1;else hi=mid-1;}\n        return res;\n    }\npublic:\n    vector<int> searchRange(vector<int>& nums, int target) {\n        return {bound(nums,target,true),bound(nums,target,false)};\n    }\n};",
      "GO": "func searchRange(nums []int, target int) []int {\n    bound := func(left bool) int {\n        lo, hi, res := 0, len(nums)-1, -1\n        for lo <= hi {\n            mid := (lo+hi)/2\n            if nums[mid] == target { res=mid; if left { hi=mid-1 } else { lo=mid+1 } } else if nums[mid] < target { lo=mid+1 } else { hi=mid-1 }\n        }\n        return res\n    }\n    return []int{bound(true), bound(false)}\n}"
    }
  },
  {
    "title": "Find Peak Element",
    "description": "A peak element is an element that is strictly greater than its neighbors. Given a 0-indexed integer array nums, find a peak element and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that nums[-1] = nums[n] = -∞. Solve in O(log n) time.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "1 <= nums.length <= 1000\n-2^31 <= nums[i] <= 2^31 - 1\nnums[i] != nums[i + 1] for all valid i.",
    "hints": "In binary search, if nums[mid] < nums[mid+1], the peak is to the right. Otherwise, it is at mid or to the left.",
    "testCases": [
      {
        "input": "[1,2,3,1]",
        "output": "2"
      },
      {
        "input": "[1,2,1,3,5,6,4]",
        "output": "5"
      },
      {
        "input": "[1]",
        "output": "0"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [1,2,3,1]",
        "output": "2",
        "explanation": "3 is a peak element and your function should return the index number 2."
      },
      "PYTHON": {
        "input": "nums = [1,2,1,3,5,6,4]",
        "output": "5",
        "explanation": "Your function can return either index 1 (nums[1]=2) or index 5 (nums[5]=6)."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findPeakElement = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = findPeakElement(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def findPeakElement(self, nums: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.findPeakElement(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int findPeakElement(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.findPeakElement(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.findPeakElement(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc findPeakElement(nums []int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := findPeakElement(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var findPeakElement = function(nums) {\n    let lo = 0, hi = nums.length - 1;\n    while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        if (nums[mid] < nums[mid+1]) lo = mid + 1;\n        else hi = mid;\n    }\n    return lo;\n};",
      "PYTHON": "class Solution:\n    def findPeakElement(self, nums):\n        lo, hi = 0, len(nums)-1\n        while lo < hi:\n            mid = (lo+hi)//2\n            if nums[mid] < nums[mid+1]: lo = mid+1\n            else: hi = mid\n        return lo",
      "JAVA": "class Solution {\n    public int findPeakElement(int[] nums) {\n        int lo=0, hi=nums.length-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]<nums[mid+1])lo=mid+1;else hi=mid;}\n        return lo;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int findPeakElement(vector<int>& nums) {\n        int lo=0,hi=nums.size()-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]<nums[mid+1])lo=mid+1;else hi=mid;}\n        return lo;\n    }\n};",
      "GO": "func findPeakElement(nums []int) int {\n    lo, hi := 0, len(nums)-1\n    for lo < hi {\n        mid := (lo+hi)/2\n        if nums[mid] < nums[mid+1] { lo = mid+1 } else { hi = mid }\n    }\n    return lo\n}"
    }
  },
  {
    "title": "Find Pivot Index in Rotated Sorted Array",
    "description": "Given a rotated sorted array, find the pivot index — the index of the smallest element (where the rotation happened). If the array is not rotated (i.e., sorted in ascending order), return 0.",
    "difficulty": "EASY",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "1 <= nums.length <= 5000\n-5000 <= nums[i] <= 5000\nAll values of nums are unique.\nnums is an ascending array that is possibly rotated.",
    "hints": "Use binary search. If nums[mid] > nums[hi], the pivot is in the right half. Otherwise, it's in the left half (including mid).",
    "testCases": [
      {
        "input": "[4,5,6,7,0,1,2]",
        "output": "4"
      },
      {
        "input": "[1,2,3,4,5]",
        "output": "0"
      },
      {
        "input": "[2,1]",
        "output": "1"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "4",
        "explanation": "The smallest element 0 is at index 4, which is the pivot."
      },
      "PYTHON": {
        "input": "nums = [1,2,3,4,5]",
        "output": "0",
        "explanation": "Array is not rotated; pivot is at index 0."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findPivot = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = findPivot(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def findPivot(self, nums: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.findPivot(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int findPivot(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.findPivot(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findPivot(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.findPivot(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc findPivot(nums []int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := findPivot(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var findPivot = function(nums) {\n    let lo = 0, hi = nums.length - 1;\n    while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        if (nums[mid] > nums[hi]) lo = mid + 1;\n        else hi = mid;\n    }\n    return lo;\n};",
      "PYTHON": "class Solution:\n    def findPivot(self, nums):\n        lo, hi = 0, len(nums)-1\n        while lo < hi:\n            mid = (lo+hi)//2\n            if nums[mid] > nums[hi]: lo = mid+1\n            else: hi = mid\n        return lo",
      "JAVA": "class Solution {\n    public int findPivot(int[] nums) {\n        int lo=0,hi=nums.length-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]>nums[hi])lo=mid+1;else hi=mid;}\n        return lo;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int findPivot(vector<int>& nums) {\n        int lo=0,hi=nums.size()-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]>nums[hi])lo=mid+1;else hi=mid;}\n        return lo;\n    }\n};",
      "GO": "func findPivot(nums []int) int {\n    lo, hi := 0, len(nums)-1\n    for lo < hi {\n        mid := (lo+hi)/2\n        if nums[mid] > nums[hi] { lo = mid+1 } else { hi = mid }\n    }\n    return lo\n}"
    }
  },
  {
    "title": "Search in Rotated Sorted Array",
    "description": "There is an integer array nums sorted in ascending order (with distinct values) which is possibly rotated at an unknown pivot. Given the array nums and an integer target, return the index of target if it is in nums, or -1 if it is not in nums. You must write an algorithm with O(log n) runtime complexity.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "1 <= nums.length <= 5000\n-10^4 <= nums[i] <= 10^4\nAll values of nums are unique.\nnums is an ascending array that is possibly rotated.\n-10^4 <= target <= 10^4",
    "hints": "Determine which half is sorted, then check if the target lies in that sorted half. Narrow the search accordingly.",
    "testCases": [
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      },
      {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1"
      },
      {
        "input": "nums = [1], target = 0",
        "output": "-1"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [4,5,6,7,0,1,2], target = 0",
        "output": "4"
      },
      "PYTHON": {
        "input": "nums = [4,5,6,7,0,1,2], target = 3",
        "output": "-1"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @param {number} target\n * @return {number}\n */\nvar search = function(nums, target) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    \n    const nums = JSON.parse(input.match(/\\[.*?\\]/)[0]); const target = parseInt(input.split('=')[2] || input.split(',')[1].split('=')[1]); res = search(nums, target);\n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def search(self, nums: list[int], target: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    \n    import re; nums = json.loads(re.search(r'\\[.*?\\]', line).group()); target = int(line.split('=')[-1]); res = sol.search(nums, target)\n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int search(int[] nums, int target) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n        \n            String aPart = line.substring(line.indexOf(\"[\"), line.indexOf(\"]\")+1);\n            int target = Integer.parseInt(line.substring(line.lastIndexOf(\"=\") + 1).trim());\n            int[] nums = Arrays.stream(aPart.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.search(nums, target);\n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n    \n        size_t aStart = line.find('['), aEnd = line.find(']') + 1;\n        string aStr = line.substr(aStart, aEnd - aStart);\n        int target = stoi(line.substr(line.find_last_of('=') + 1));\n        aStr.erase(remove(aStr.begin(), aStr.end(), '['), aStr.end());\n        aStr.erase(remove(aStr.begin(), aStr.end(), ']'), aStr.end());\n        replace(aStr.begin(), aStr.end(), ',', ' ');\n        stringstream ss(aStr);\n        int v; vector<int> nums;\n        while(ss >> v) nums.push_back(v);\n        auto res = sol.search(nums, target);\n\n    cout << (res ? \"true\" : \"false\") << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc search(nums []int, target int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n    \n        var nums []int\n        aIdx := strings.Index(line, \"[\")\n        aEnd := strings.Index(line, \"]\") + 1\n        json.Unmarshal([]byte(line[aIdx:aEnd]), &nums)\n        tIdx := strings.LastIndex(line, \"=\") + 1\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := search(nums, target)\n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var search = function(nums, target) {\n    let lo = 0, hi = nums.length - 1;\n    while (lo <= hi) {\n        const mid = (lo + hi) >> 1;\n        if (nums[mid] === target) return mid;\n        if (nums[lo] <= nums[mid]) {\n            if (nums[lo] <= target && target < nums[mid]) hi = mid - 1;\n            else lo = mid + 1;\n        } else {\n            if (nums[mid] < target && target <= nums[hi]) lo = mid + 1;\n            else hi = mid - 1;\n        }\n    }\n    return -1;\n};",
      "PYTHON": "class Solution:\n    def search(self, nums, target):\n        lo, hi = 0, len(nums)-1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if nums[mid] == target: return mid\n            if nums[lo] <= nums[mid]:\n                if nums[lo] <= target < nums[mid]: hi = mid-1\n                else: lo = mid+1\n            else:\n                if nums[mid] < target <= nums[hi]: lo = mid+1\n                else: hi = mid-1\n        return -1",
      "JAVA": "class Solution {\n    public int search(int[] nums, int target) {\n        int lo=0,hi=nums.length-1;\n        while(lo<=hi){\n            int mid=(lo+hi)/2;\n            if(nums[mid]==target) return mid;\n            if(nums[lo]<=nums[mid]){\n                if(nums[lo]<=target && target<nums[mid]) hi=mid-1;\n                else lo=mid+1;\n            } else {\n                if(nums[mid]<target && target<=nums[hi]) lo=mid+1;\n                else hi=mid-1;\n            }\n        }\n        return -1;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int search(vector<int>& nums, int target) {\n        int lo=0,hi=nums.size()-1;\n        while(lo<=hi){\n            int mid=(lo+hi)/2;\n            if(nums[mid]==target) return mid;\n            if(nums[lo]<=nums[mid]){\n                if(nums[lo]<=target && target<nums[mid]) hi=mid-1;\n                else lo=mid+1;\n            } else {\n                if(nums[mid]<target && target<=nums[hi]) lo=mid+1;\n                else hi=mid-1;\n            }\n        }\n        return -1;\n    }\n};",
      "GO": "func search(nums []int, target int) int {\n    lo, hi := 0, len(nums)-1\n    for lo <= hi {\n        mid := (lo+hi)/2\n        if nums[mid] == target { return mid }\n        if nums[lo] <= nums[mid] {\n            if nums[lo] <= target && target < nums[mid] { hi = mid-1 } else { lo = mid+1 }\n        } else {\n            if nums[mid] < target && target <= nums[hi] { lo = mid+1 } else { hi = mid-1 }\n        }\n    }\n    return -1\n}"
    }
  },
  {
    "title": "Integer Square Root",
    "description": "Given a non-negative integer x, return the floor of the square root of x (i.e., the largest integer r such that r*r <= x). Do not use built-in power or square root functions. Solve in O(log x) time using binary search.",
    "difficulty": "EASY",
    "tags": [
      "Math",
      "Binary Search"
    ],
    "constraints": "0 <= x <= 2^31 - 1",
    "hints": "Binary search on the answer range [0, x]. For mid, if mid*mid <= x, the answer is at least mid. Otherwise, search lower.",
    "testCases": [
      {
        "input": "4",
        "output": "2"
      },
      {
        "input": "8",
        "output": "2"
      },
      {
        "input": "0",
        "output": "0"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "x = 8",
        "output": "2",
        "explanation": "The square root of 8 is 2.82..., and since we round down, 2 is returned."
      },
      "PYTHON": {
        "input": "x = 4",
        "output": "2"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number} x\n * @return {number}\n */\nvar mySqrt = function(x) {\n    \n};\n\nfunction main() {\n    let res;\n    const x = parseInt(input); res = mySqrt(x);\n    \n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def mySqrt(self, x: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    x = int(line); res = sol.mySqrt(x)\n    \n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int mySqrt(int x) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        int x = Integer.parseInt(line.trim()); var res = sol.mySqrt(x);\n        \n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int mySqrt(int x) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    int x = stoi(line); auto res = sol.mySqrt(x);\n    \n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc mySqrt(x int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    x, _ := strconv.Atoi(line); res := mySqrt(x)\n    \n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var mySqrt = function(x) {\n    if (x < 2) return x;\n    let lo = 1, hi = Math.floor(x / 2), ans = 1;\n    while (lo <= hi) {\n        const mid = (lo + hi) >> 1;\n        if (mid * mid <= x) { ans = mid; lo = mid + 1; }\n        else hi = mid - 1;\n    }\n    return ans;\n};",
      "PYTHON": "class Solution:\n    def mySqrt(self, x):\n        if x < 2: return x\n        lo, hi, ans = 1, x//2, 1\n        while lo <= hi:\n            mid = (lo+hi)//2\n            if mid*mid <= x: ans = mid; lo = mid+1\n            else: hi = mid-1\n        return ans",
      "JAVA": "class Solution {\n    public int mySqrt(int x) {\n        if (x < 2) return x;\n        long lo=1, hi=x/2, ans=1;\n        while(lo<=hi){long mid=(lo+hi)/2;if(mid*mid<=x){ans=mid;lo=mid+1;}else hi=mid-1;}\n        return (int)ans;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int mySqrt(int x) {\n        if (x < 2) return x;\n        long lo=1, hi=x/2, ans=1;\n        while(lo<=hi){long mid=(lo+hi)/2;if(mid*mid<=x){ans=mid;lo=mid+1;}else hi=mid-1;}\n        return ans;\n    }\n};",
      "GO": "func mySqrt(x int) int {\n    if x < 2 { return x }\n    lo, hi, ans := 1, x/2, 1\n    for lo <= hi {\n        mid := (lo+hi)/2\n        if mid*mid <= x { ans = mid; lo = mid+1 } else { hi = mid-1 }\n    }\n    return ans\n}"
    }
  },
  {
    "title": "Koko Eating Bananas",
    "description": "Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. Koko can decide her bananas-per-hour eating speed k. Each hour, she chooses a pile and eats k bananas from it. If the pile has fewer than k bananas, she eats all of them and does not eat more bananas during this hour. Return the minimum integer k such that she can eat all the bananas within h hours.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "1 <= piles.length <= 10^4\npiles.length <= h <= 10^9\n1 <= piles[i] <= 10^9",
    "hints": "Binary search on the speed k. For a given k, compute total hours = sum(ceil(pile/k)). If hours <= h, k is feasible.",
    "testCases": [
      {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4"
      },
      {
        "input": "piles = [30,11,23,4,20], h = 5",
        "output": "30"
      },
      {
        "input": "piles = [30,11,23,4,20], h = 6",
        "output": "23"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "piles = [3,6,7,11], h = 8",
        "output": "4",
        "explanation": "At speed 4: hours = ceil(3/4)+ceil(6/4)+ceil(7/4)+ceil(11/4) = 1+2+2+3 = 8."
      },
      "PYTHON": {
        "input": "piles = [30,11,23,4,20], h = 5",
        "output": "30"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} piles\n * @param {number} h\n * @return {number}\n */\nvar minEatingSpeed = function(piles, h) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    \n    const nums = JSON.parse(input.match(/\\[.*?\\]/)[0]); const target = parseInt(input.split('=')[2] || input.split(',')[1].split('=')[1]); res = minEatingSpeed(nums, target);\n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def minEatingSpeed(self, piles: list[int], h: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    \n    import re; nums = json.loads(re.search(r'\\[.*?\\]', line).group()); target = int(line.split('=')[-1]); res = sol.minEatingSpeed(nums, target)\n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n        \n            String aPart = line.substring(line.indexOf(\"[\"), line.indexOf(\"]\")+1);\n            int target = Integer.parseInt(line.substring(line.lastIndexOf(\"=\") + 1).trim());\n            int[] nums = Arrays.stream(aPart.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.minEatingSpeed(nums, target);\n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n    \n        size_t aStart = line.find('['), aEnd = line.find(']') + 1;\n        string aStr = line.substr(aStart, aEnd - aStart);\n        int target = stoi(line.substr(line.find_last_of('=') + 1));\n        aStr.erase(remove(aStr.begin(), aStr.end(), '['), aStr.end());\n        aStr.erase(remove(aStr.begin(), aStr.end(), ']'), aStr.end());\n        replace(aStr.begin(), aStr.end(), ',', ' ');\n        stringstream ss(aStr);\n        int v; vector<int> nums;\n        while(ss >> v) nums.push_back(v);\n        auto res = sol.minEatingSpeed(nums, target);\n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc minEatingSpeed(piles []int, h int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n    \n        var nums []int\n        aIdx := strings.Index(line, \"[\")\n        aEnd := strings.Index(line, \"]\") + 1\n        json.Unmarshal([]byte(line[aIdx:aEnd]), &nums)\n        tIdx := strings.LastIndex(line, \"=\") + 1\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := minEatingSpeed(nums, target)\n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var minEatingSpeed = function(piles, h) {\n    let lo = 1, hi = Math.max(...piles);\n    while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        const hours = piles.reduce((s, p) => s + Math.ceil(p / mid), 0);\n        if (hours <= h) hi = mid;\n        else lo = mid + 1;\n    }\n    return lo;\n};",
      "PYTHON": "class Solution:\n    def minEatingSpeed(self, piles, h):\n        import math\n        lo, hi = 1, max(piles)\n        while lo < hi:\n            mid = (lo+hi)//2\n            if sum(math.ceil(p/mid) for p in piles) <= h: hi = mid\n            else: lo = mid+1\n        return lo",
      "JAVA": "class Solution {\n    public int minEatingSpeed(int[] piles, int h) {\n        int lo=1,hi=0;\n        for(int p:piles) hi=Math.max(hi,p);\n        while(lo<hi){\n            int mid=(lo+hi)/2;\n            long hours=0;\n            for(int p:piles) hours+=(p+mid-1)/mid;\n            if(hours<=h) hi=mid; else lo=mid+1;\n        }\n        return lo;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int minEatingSpeed(vector<int>& piles, int h) {\n        int lo=1, hi=*max_element(piles.begin(),piles.end());\n        while(lo<hi){\n            int mid=(lo+hi)/2;\n            long hours=0;\n            for(int p:piles) hours+=(p+mid-1)/mid;\n            if(hours<=h) hi=mid; else lo=mid+1;\n        }\n        return lo;\n    }\n};",
      "GO": "func minEatingSpeed(piles []int, h int) int {\n    lo, hi := 1, 0\n    for _, p := range piles { if p > hi { hi = p } }\n    for lo < hi {\n        mid := (lo+hi)/2; hours := 0\n        for _, p := range piles { hours += (p+mid-1)/mid }\n        if hours <= h { hi = mid } else { lo = mid+1 }\n    }\n    return lo\n}"
    }
  },
  {
    "title": "Find Minimum in Rotated Sorted Array",
    "description": "Suppose an array of length n sorted in ascending order is rotated between 1 and n times. Given the sorted rotated array nums of unique elements, return the minimum element of this array. You must write an algorithm that runs in O(log n) time.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search"
    ],
    "constraints": "1 <= nums.length <= 5000\n-5000 <= nums[i] <= 5000\nAll the integers of nums are unique.\nnums is sorted and rotated between 1 and n times.",
    "hints": "Binary search: compare nums[mid] with nums[hi]. If nums[mid] > nums[hi], minimum is in the right half. Otherwise, it's in the left half including mid.",
    "testCases": [
      {
        "input": "[3,4,5,1,2]",
        "output": "1"
      },
      {
        "input": "[4,5,6,7,0,1,2]",
        "output": "0"
      },
      {
        "input": "[11,13,15,17]",
        "output": "11"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums = [3,4,5,1,2]",
        "output": "1",
        "explanation": "The original array was [1,2,3,4,5] rotated 3 times."
      },
      "PYTHON": {
        "input": "nums = [4,5,6,7,0,1,2]",
        "output": "0"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums\n * @return {number}\n */\nvar findMin = function(nums) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    const nums = JSON.parse(input); res = findMin(nums);\n    \n    \n    \n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def findMin(self, nums: list[int]) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    nums = json.loads(line); res = sol.findMin(nums)\n    \n    \n    \n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int findMin(int[] nums) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n            String s = line.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \");\n            int[] nums = Arrays.stream(s.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.findMin(nums);\n        \n        \n        \n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n        string s = line;\n        s.erase(remove(s.begin(), s.end(), '['), s.end());\n        s.erase(remove(s.begin(), s.end(), ']'), s.end());\n        replace(s.begin(), s.end(), ',', ' ');\n        stringstream ss(s);\n        int val; vector<int> nums;\n        while(ss >> val) nums.push_back(val);\n        auto res = sol.findMin(nums);\n    \n    \n    \n    \n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc findMin(nums []int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    var nums []int; json.Unmarshal([]byte(line), &nums); res := findMin(nums)\n    \n    \n    \n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var findMin = function(nums) {\n    let lo = 0, hi = nums.length - 1;\n    while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        if (nums[mid] > nums[hi]) lo = mid + 1;\n        else hi = mid;\n    }\n    return nums[lo];\n};",
      "PYTHON": "class Solution:\n    def findMin(self, nums):\n        lo, hi = 0, len(nums)-1\n        while lo < hi:\n            mid = (lo+hi)//2\n            if nums[mid] > nums[hi]: lo = mid+1\n            else: hi = mid\n        return nums[lo]",
      "JAVA": "class Solution {\n    public int findMin(int[] nums) {\n        int lo=0,hi=nums.length-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]>nums[hi])lo=mid+1;else hi=mid;}\n        return nums[lo];\n    }\n}",
      "CPP": "class Solution {\npublic:\n    int findMin(vector<int>& nums) {\n        int lo=0,hi=nums.size()-1;\n        while(lo<hi){int mid=(lo+hi)/2;if(nums[mid]>nums[hi])lo=mid+1;else hi=mid;}\n        return nums[lo];\n    }\n};",
      "GO": "func findMin(nums []int) int {\n    lo, hi := 0, len(nums)-1\n    for lo < hi {\n        mid := (lo+hi)/2\n        if nums[mid] > nums[hi] { lo = mid+1 } else { hi = mid }\n    }\n    return nums[lo]\n}"
    }
  },
  {
    "title": "Allocate Books (Book Allocation Problem)",
    "description": "Given an array books where books[i] is the number of pages in the ith book, and m students. Allocate all books to students such that each student gets at least one book, books are allocated contiguously, and the maximum number of pages assigned to a student is minimized. Return that minimum value.",
    "difficulty": "HARD",
    "tags": [
      "Array",
      "Binary Search",
      "Greedy"
    ],
    "constraints": "1 <= books.length <= 10^5\n1 <= books[i] <= 10^6\n1 <= m <= books.length",
    "hints": "Binary search on the answer (maximum pages). For a given mid, greedily assign books to students. If students needed <= m, mid might be the answer.",
    "testCases": [
      {
        "input": "books = [12,34,67,90], m = 2",
        "output": "113"
      },
      {
        "input": "books = [10,20,30,40], m = 2",
        "output": "60"
      },
      {
        "input": "books = [5,17,100,11], m = 4",
        "output": "100"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "books = [12,34,67,90], m = 2",
        "output": "113",
        "explanation": "Optimal allocation: [12,34,67] and [90]. Max pages = 113."
      },
      "PYTHON": {
        "input": "books = [10,20,30,40], m = 2",
        "output": "60",
        "explanation": "Allocate [10,20,30] and [40] → max = 60."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} books\n * @param {number} m\n * @return {number}\n */\nvar allocateBooks = function(books, m) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    \n    const nums = JSON.parse(input.match(/\\[.*?\\]/)[0]); const target = parseInt(input.split('=')[2] || input.split(',')[1].split('=')[1]); res = allocateBooks(nums, target);\n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def allocateBooks(self, books: list[int], m: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    \n    import re; nums = json.loads(re.search(r'\\[.*?\\]', line).group()); target = int(line.split('=')[-1]); res = sol.allocateBooks(nums, target)\n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int allocateBooks(int[] books, int m) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n        \n            String aPart = line.substring(line.indexOf(\"[\"), line.indexOf(\"]\")+1);\n            int target = Integer.parseInt(line.substring(line.lastIndexOf(\"=\") + 1).trim());\n            int[] nums = Arrays.stream(aPart.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.allocateBooks(nums, target);\n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int allocateBooks(vector<int>& books, int m) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n    \n        size_t aStart = line.find('['), aEnd = line.find(']') + 1;\n        string aStr = line.substr(aStart, aEnd - aStart);\n        int target = stoi(line.substr(line.find_last_of('=') + 1));\n        aStr.erase(remove(aStr.begin(), aStr.end(), '['), aStr.end());\n        aStr.erase(remove(aStr.begin(), aStr.end(), ']'), aStr.end());\n        replace(aStr.begin(), aStr.end(), ',', ' ');\n        stringstream ss(aStr);\n        int v; vector<int> nums;\n        while(ss >> v) nums.push_back(v);\n        auto res = sol.allocateBooks(nums, target);\n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc allocateBooks(books []int, m int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n    \n        var nums []int\n        aIdx := strings.Index(line, \"[\")\n        aEnd := strings.Index(line, \"]\") + 1\n        json.Unmarshal([]byte(line[aIdx:aEnd]), &nums)\n        tIdx := strings.LastIndex(line, \"=\") + 1\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := allocateBooks(nums, target)\n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var allocateBooks = function(books, m) {\n    function canAllocate(maxPages) {\n        let students = 1, pages = 0;\n        for (const b of books) {\n            if (b > maxPages) return false;\n            if (pages + b > maxPages) { students++; pages = b; }\n            else pages += b;\n        }\n        return students <= m;\n    }\n    let lo = Math.max(...books), hi = books.reduce((a,b)=>a+b,0);\n    while (lo < hi) {\n        const mid = (lo + hi) >> 1;\n        if (canAllocate(mid)) hi = mid;\n        else lo = mid + 1;\n    }\n    return lo;\n};",
      "PYTHON": "class Solution:\n    def allocateBooks(self, books, m):\n        def can_allocate(max_pages):\n            students, pages = 1, 0\n            for b in books:\n                if b > max_pages: return False\n                if pages + b > max_pages: students += 1; pages = b\n                else: pages += b\n            return students <= m\n        lo, hi = max(books), sum(books)\n        while lo < hi:\n            mid = (lo+hi)//2\n            if can_allocate(mid): hi = mid\n            else: lo = mid+1\n        return lo",
      "JAVA": "class Solution {\n    boolean canAllocate(int[] books, int m, int max) {\n        int students=1, pages=0;\n        for(int b:books){if(b>max)return false;if(pages+b>max){students++;pages=b;}else pages+=b;}\n        return students<=m;\n    }\n    public int allocateBooks(int[] books, int m) {\n        int lo=0,hi=0;\n        for(int b:books){lo=Math.max(lo,b);hi+=b;}\n        while(lo<hi){int mid=(lo+hi)/2;if(canAllocate(books,m,mid))hi=mid;else lo=mid+1;}\n        return lo;\n    }\n}",
      "CPP": "class Solution {\n    bool canAllocate(vector<int>& stalls, int c, int d){\n        int count=1,last=stalls[0];\n        for(int s:stalls) if(s-last>=d){count++;last=s;}\n        return count>=c;\n    }\npublic:\n    int allocateBooks(vector<int>& books, int m) {\n        int lo=*max_element(books.begin(),books.end()), hi=0;\n        for(int b:books) hi+=b;\n        while(lo<hi){int mid=(lo+hi)/2;if(canAllocate(books,m,mid))hi=mid;else lo=mid+1;}\n        return lo;\n    }\n};",
      "GO": "func allocateBooks(books []int, m int) int {\n    canAllocate := func(mx int) bool {\n        students, pages := 1, 0\n        for _, b := range books {\n            if b > mx { return false }\n            if pages+b > mx { students++; pages = b } else { pages += b }\n        }\n        return students <= m\n    }\n    lo, hi := 0, 0\n    for _, b := range books { if b > lo { lo = b }; hi += b }\n    for lo < hi {\n        mid := (lo+hi)/2\n        if canAllocate(mid) { hi = mid } else { lo = mid+1 }\n    }\n    return lo\n}"
    }
  },
  {
    "title": "Search a 2D Matrix II",
    "description": "Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties: integers in each row are sorted in ascending order from left to right, and integers in each column are sorted in ascending order from top to bottom.",
    "difficulty": "MEDIUM",
    "tags": [
      "Array",
      "Binary Search",
      "Divide and Conquer",
      "Matrix"
    ],
    "constraints": "m == matrix.length\nn == matrix[i].length\n1 <= n, m <= 300\n-10^9 <= matrix[i][j] <= 10^9\nAll integers in each row are sorted in ascending order.\nAll integers in each column are sorted in ascending order.\n-10^9 <= target <= 10^9",
    "hints": "Start from the top-right corner. If current > target, move left. If current < target, move down. If equal, return true.",
    "testCases": [
      {
        "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
        "output": "true"
      },
      {
        "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",
        "output": "false"
      },
      {
        "input": "matrix = [[1,1]], target = 2",
        "output": "false"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "matrix = [[1,4,7],[2,5,8],[3,6,9]], target = 5",
        "output": "true",
        "explanation": "Start top-right (7): 7>5 → move left (4): 4<5 → move down (5): found!"
      },
      "PYTHON": {
        "input": "matrix = [[1,4,7],[2,5,8],[3,6,9]], target = 10",
        "output": "false"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[][]} matrix\n * @param {number} target\n * @return {boolean}\n */\nvar searchMatrixII = function(matrix, target) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    const matrix = JSON.parse(input.match(/\\[\\[.*?\\]\\]/)[0]); const target = parseInt(input.split('target =')[1]); res = searchMatrix(matrix, target);\n    \n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def searchMatrix(self, matrix: list[list[int]], target: int) -> bool:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    import re; matrix = json.loads(re.search(r'\\[\\[.*?\\]\\]', line).group()); target = int(line.split('target =')[1]); res = sol.searchMatrix(matrix, target)\n    \n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public boolean searchMatrix(int[][] matrix, int target) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n            String mPart = line.substring(line.indexOf(\"[[\"), line.indexOf(\"]]\")+2);\n            int target = Integer.parseInt(line.split(\"target =\")[1].trim());\n            List<int[]> list = new ArrayList<>();\n            int i = 0;\n            while((i = mPart.indexOf('[', i+1)) != -1) {\n                if(mPart.charAt(i+1) == '[') continue;\n                int j = mPart.indexOf(']', i);\n                String row = mPart.substring(i+1, j).replace(\",\", \" \");\n                list.add(Arrays.stream(row.trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray());\n                i = j + 1;\n            }\n            int[][] matrix = list.toArray(new int[0][]);\n            var res = sol.searchMatrix(matrix, target);\n        \n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n        size_t mStart = line.find(\"[[\"), mEnd = line.find(\"]]\", mStart) + 2;\n        string mStr = line.substr(mStart, mEnd - mStart);\n        int target = stoi(line.substr(line.find(\"target =\") + 8));\n        vector<vector<int>> matrix;\n        size_t p = 0;\n        while((p = mStr.find('[', p + 1)) != string::npos) {\n            if(mStr[p+1] == '[') continue;\n            size_t end = mStr.find(']', p);\n            string rowStr = mStr.substr(p+1, end-p-1);\n            replace(rowStr.begin(), rowStr.end(), ',', ' ');\n            stringstream ssr(rowStr);\n            int v; vector<int> row;\n            while(ssr >> v) row.push_back(v);\n            matrix.push_back(row);\n        }\n        auto res = sol.searchMatrix(matrix, target);\n    \n\n    cout << (res ? \"true\" : \"false\") << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc searchMatrix(matrix [][]int, target int) bool {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n        var matrix [][]int\n        mIdx := strings.Index(line, \"[[\")\n        mEnd := strings.Index(line, \"]]\") + 2\n        json.Unmarshal([]byte(line[mIdx:mEnd]), &matrix)\n        tIdx := strings.Index(line, \"target =\") + 8\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := searchMatrix(matrix, target)\n    \n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var searchMatrixII = function(matrix, target) {\n    let row = 0, col = matrix[0].length - 1;\n    while (row < matrix.length && col >= 0) {\n        if (matrix[row][col] === target) return true;\n        if (matrix[row][col] > target) col--;\n        else row++;\n    }\n    return false;\n};",
      "PYTHON": "class Solution:\n    def searchMatrix(self, matrix, target):\n        row, col = 0, len(matrix[0])-1\n        while row < len(matrix) and col >= 0:\n            if matrix[row][col] == target: return True\n            elif matrix[row][col] > target: col -= 1\n            else: row += 1\n        return False",
      "JAVA": "class Solution {\n    public boolean searchMatrix(int[][] m, int target) {\n        int r=0, c=m[0].length-1;\n        while(r<m.length && c>=0){\n            if(m[r][c]==target) return true;\n            else if(m[r][c]>target) c--;\n            else r++;\n        }\n        return false;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    bool searchMatrix(vector<vector<int>>& m, int target) {\n        int r=0, c=m[0].size()-1;\n        while(r<m.size() && c>=0){\n            if(m[r][c]==target) return true;\n            else if(m[r][c]>target) c--;\n            else r++;\n        }\n        return false;\n    }\n};",
      "GO": "func searchMatrix(matrix [][]int, target int) bool {\n    r, c := 0, len(matrix[0])-1\n    for r < len(matrix) && c >= 0 {\n        if matrix[r][c] == target { return true } else if matrix[r][c] > target { c-- } else { r++ }\n    }\n    return false\n}"
    }
  },
  {
    "title": "Median of Two Sorted Arrays",
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. The overall run time complexity should be O(log(m+n)).",
    "difficulty": "HARD",
    "tags": [
      "Array",
      "Binary Search",
      "Divide and Conquer"
    ],
    "constraints": "nums1.length == m\nnums2.length == n\n0 <= m <= 1000\n0 <= n <= 1000\n1 <= m + n <= 2000\n-10^6 <= nums1[i], nums2[i] <= 10^6",
    "hints": "Binary search on the smaller array. Partition both arrays so that the left halves together have (m+n+1)/2 elements. Adjust the partition until the merge condition is satisfied.",
    "testCases": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000"
      },
      {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000"
      },
      {
        "input": "nums1 = [0,0], nums2 = [0,0]",
        "output": "0.00000"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "Merged array = [1,2,3] and median is 2."
      },
      "PYTHON": {
        "input": "nums1 = [1,2], nums2 = [3,4]",
        "output": "2.50000",
        "explanation": "Merged array = [1,2,3,4] and median is (2+3)/2 = 2.5."
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} nums1\n * @param {number[]} nums2\n * @return {number}\n */\nvar findMedianSortedArrays = function(nums1, nums2) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    const arrays = input.match(/\\[.*?\\]/g).map(JSON.parse); res = findMedianSortedArrays(arrays[0], arrays[1]);\n    \n    \n    \n    \n    console.log(res.toFixed(5));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    import re; arrays = [json.loads(a) for a in re.findall(r'\\[.*?\\]', line)]; res = sol.findMedianSortedArrays(arrays[0], arrays[1])\n    \n    \n    \n    \n    print(\"{:.5f}\".format(res))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n            String[] parts = line.split(\"\\]\");\n            int[] n1 = Arrays.stream(parts[0].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            int[] n2 = Arrays.stream(parts[1].replaceAll(\"[^0-9,-]\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.findMedianSortedArrays(n1, n2);\n        \n        \n        \n\n        System.out.printf(\"%.5f\\n\", res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n        auto pos1 = line.find('['), pos2 = line.find(']', pos1), pos3 = line.find('[', pos2), pos4 = line.find(']', pos3);\n        auto s1 = line.substr(pos1+1, pos2-pos1-1), s2 = line.substr(pos3+1, pos4-pos3-1);\n        replace(s1.begin(), s1.end(), ',', ' '); replace(s2.begin(), s2.end(), ',', ' ');\n        stringstream ss1(s1), ss2(s2);\n        int val; vector<int> n1, n2;\n        while(ss1 >> val) n1.push_back(val);\n        while(ss2 >> val) n2.push_back(val);\n        auto res = sol.findMedianSortedArrays(n1, n2);\n    \n    \n    \n\n    cout << fixed << setprecision(5) << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc findMedianSortedArrays(nums1 []int, nums2 []int) float64 {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n        parts := strings.Split(line, \"]\")\n        var n1, n2 []int\n        json.Unmarshal([]byte(parts[0]+\"]\"), &n1)\n        if len(parts) > 1 {\n            s2 := parts[1]\n            if strings.Contains(s2, \"[\") {\n                json.Unmarshal([]byte(s2[strings.Index(s2, \"[\"):]+\"]\"), &n2)\n            }\n        }\n        res1, res2 := findMedianSortedArrays(n1, n2)\n    \n    \n    \n\n    fmt.Printf(\"%.5f\\n\", res)\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var findMedianSortedArrays = function(nums1, nums2) {\n    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);\n    const m = nums1.length, n = nums2.length, half = Math.floor((m + n + 1) / 2);\n    let lo = 0, hi = m;\n    while (lo <= hi) {\n        const i = (lo + hi) >> 1, j = half - i;\n        const maxL1 = i === 0 ? -Infinity : nums1[i-1];\n        const minR1 = i === m ? Infinity : nums1[i];\n        const maxL2 = j === 0 ? -Infinity : nums2[j-1];\n        const minR2 = j === n ? Infinity : nums2[j];\n        if (maxL1 <= minR2 && maxL2 <= minR1) {\n            if ((m + n) % 2 === 1) return Math.max(maxL1, maxL2);\n            return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2;\n        } else if (maxL1 > minR2) hi = i - 1;\n        else lo = i + 1;\n    }\n};",
      "PYTHON": "class Solution:\n    def findMedianSortedArrays(self, nums1, nums2):\n        if len(nums1) > len(nums2): nums1, nums2 = nums2, nums1\n        m, n = len(nums1), len(nums2)\n        half = (m+n+1)//2\n        lo, hi = 0, m\n        while lo <= hi:\n            i = (lo+hi)//2; j = half-i\n            maxL1 = nums1[i-1] if i>0 else float('-inf')\n            minR1 = nums1[i] if i<m else float('inf')\n            maxL2 = nums2[j-1] if j>0 else float('-inf')\n            minR2 = nums2[j] if j<n else float('inf')\n            if maxL1<=minR2 and maxL2<=minR1:\n                if (m+n)%2==1: return max(maxL1,maxL2)\n                return (max(maxL1,maxL2)+min(minR1,minR2))/2\n            elif maxL1>minR2: hi=i-1\n            else: lo=i+1",
      "JAVA": "class Solution {\n    public double findMedianSortedArrays(int[] A, int[] B) {\n        if (A.length > B.length) return findMedianSortedArrays(B, A);\n        int m=A.length, n=B.length, half=(m+n+1)/2, lo=0, hi=m;\n        while(lo<=hi){\n            int i=(lo+hi)/2, j=half-i;\n            int mL1=i==0?Integer.MIN_VALUE:A[i-1], mR1=i==m?Integer.MAX_VALUE:A[i];\n            int mL2=j==0?Integer.MIN_VALUE:B[j-1], mR2=j==n?Integer.MAX_VALUE:B[j];\n            if(mL1<=mR2 && mL2<=mR1){\n                if((m+n)%2==1) return Math.max(mL1,mL2);\n                return (Math.max(mL1,mL2)+Math.min(mR1,mR2))/2.0;\n            } else if(mL1>mR2) hi=i-1; else lo=i+1;\n        }\n        return 0;\n    }\n}",
      "CPP": "class Solution {\npublic:\n    double findMedianSortedArrays(vector<int>& A, vector<int>& B) {\n        if(A.size()>B.size()) return findMedianSortedArrays(B,A);\n        int m=A.size(),n=B.size(),half=(m+n+1)/2,lo=0,hi=m;\n        while(lo<=hi){\n            int i=(lo+hi)/2,j=half-i;\n            int mL1=i==0?INT_MIN:A[i-1], mR1=i==m?INT_MAX:A[i];\n            int mL2=j==0?INT_MIN:B[j-1], mR2=j==n?INT_MAX:B[j];\n            if(mL1<=mR2 && mL2<=mR1){\n                if((m+n)%2==1) return max(mL1,mL2);\n                return (max(mL1,mL2)+min(mR1,mR2))/2.0;\n            } else if(mL1>mR2) hi=i-1; else lo=i+1;\n        }\n        return 0;\n    }\n};",
      "GO": "func findMedianSortedArrays(A []int, B []int) float64 {\n    if len(A) > len(B) { A, B = B, A }\n    m, n := len(A), len(B); half := (m+n+1)/2\n    lo, hi := 0, m\n    for lo <= hi {\n        i := (lo+hi)/2; j := half-i\n        mL1, mR1 := -1<<62, 1<<62\n        mL2, mR2 := -1<<62, 1<<62\n        if i > 0 { mL1 = A[i-1] }; if i < m { mR1 = A[i] }\n        if j > 0 { mL2 = B[j-1] }; if j < n { mR2 = B[j] }\n        if mL1 <= mR2 && mL2 <= mR1 {\n            if (m+n)%2 == 1 { return float64(max(mL1,mL2)) }\n            return float64(max(mL1,mL2)+min(mR1,mR2)) / 2.0\n        } else if mL1 > mR2 { hi = i-1 } else { lo = i+1 }\n    }\n    return 0\n}"
    }
  },
  {
    "title": "Aggressive Cows",
    "description": "You are given an array stalls with positions of stalls. You need to place c cows in the stalls such that the minimum distance between any two cows is maximized. Return this maximum possible minimum distance.",
    "difficulty": "HARD",
    "tags": [
      "Array",
      "Binary Search",
      "Greedy"
    ],
    "constraints": "2 <= stalls.length <= 10^5\n0 <= stalls[i] <= 10^9\n2 <= c <= stalls.length\nAll stall positions are unique.",
    "hints": "Sort stalls. Binary search on the answer (minimum distance). For a given distance d, greedily place cows and check if c cows can be placed.",
    "testCases": [
      {
        "input": "stalls = [1,2,8,4,9], c = 3",
        "output": "3"
      },
      {
        "input": "stalls = [10,1,2,7,5], c = 3",
        "output": "3"
      },
      {
        "input": "stalls = [0,3,4,7,10,9], c = 4",
        "output": "3"
      }
    ],
    "examples": {
      "JAVASCRIPT": {
        "input": "stalls = [1,2,4,8,9], c = 3",
        "output": "3",
        "explanation": "Place cows at stalls 1, 4, 9. Minimum distance = min(4-1, 9-4) = 3."
      },
      "PYTHON": {
        "input": "stalls = [1,2,8,4,9], c = 3",
        "output": "3"
      }
    },
    "codeSnippets": {
      "JAVASCRIPT": "const fs = require('fs');\nconst input = fs.readFileSync(0, 'utf8').trim();\n\n/**\n * @param {number[]} stalls\n * @param {number} c\n * @return {number}\n */\nvar aggressiveCows = function(stalls, c) {\n    \n};\n\nfunction main() {\n    let res;\n    \n    \n    \n    \n    \n    const nums = JSON.parse(input.match(/\\[.*?\\]/)[0]); const target = parseInt(input.split('=')[2] || input.split(',')[1].split('=')[1]); res = aggressiveCows(nums, target);\n    \n    console.log(JSON.stringify(res));\n}\nmain();",
      "PYTHON": "import sys\nimport json\n\nclass Solution:\n    def aggressiveCows(self, stalls: list[int], c: int) -> int:\n        \n\nif __name__ == \"__main__\":\n    line = sys.stdin.read().strip()\n    sol = Solution()\n    \n    \n    \n    \n    \n    import re; nums = json.loads(re.search(r'\\[.*?\\]', line).group()); target = int(line.split('=')[-1]); res = sol.aggressiveCows(nums, target)\n    \n    print(json.dumps(res).replace(' ', '').lower() if isinstance(res, bool) else json.dumps(res).replace(' ', ''))\n",
      "JAVA": "import java.util.*;\nimport java.util.stream.*;\n\nclass Solution {\n    public int aggressiveCows(int[] stalls, int c) {\n        \n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (!sc.hasNextLine()) return;\n        String line = sc.nextLine();\n        Solution sol = new Solution();\n        \n        \n        \n        \n        \n        \n            String aPart = line.substring(line.indexOf(\"[\"), line.indexOf(\"]\")+1);\n            int target = Integer.parseInt(line.substring(line.lastIndexOf(\"=\") + 1).trim());\n            int[] nums = Arrays.stream(aPart.replaceAll(\"[\\[\\]]\", \"\").replace(\",\", \" \").trim().split(\"\\s+\")).filter(x -> !x.isEmpty()).mapToInt(Integer::parseInt).toArray();\n            var res = sol.aggressiveCows(nums, target);\n\n        if (res instanceof int[]) System.out.println(Arrays.toString((int[])res).replace(\" \", \"\")); else if (res instanceof List) System.out.println(res.toString().replace(\" \", \"\")); else System.out.println(res);\n    }\n}",
      "CPP": "#include <iostream>\n#include <vector>\n#include <string>\n#include <sstream>\n#include <algorithm>\n#include <iomanip>\nusing namespace std;\n\nclass Solution {\npublic:\n    int aggressiveCows(vector<int>& stalls, int c) {\n        \n    }\n};\n\nint main() {\n    string line;\n    getline(cin, line);\n    Solution sol;\n    \n    \n    \n    \n    \n    \n        size_t aStart = line.find('['), aEnd = line.find(']') + 1;\n        string aStr = line.substr(aStart, aEnd - aStart);\n        int target = stoi(line.substr(line.find_last_of('=') + 1));\n        aStr.erase(remove(aStr.begin(), aStr.end(), '['), aStr.end());\n        aStr.erase(remove(aStr.begin(), aStr.end(), ']'), aStr.end());\n        replace(aStr.begin(), aStr.end(), ',', ' ');\n        stringstream ss(aStr);\n        int v; vector<int> nums;\n        while(ss >> v) nums.push_back(v);\n        auto res = sol.aggressiveCows(nums, target);\n\n    cout << res << endl;\n    return 0;\n}",
      "GO": "package main\nimport (\n    \"fmt\"\n    \"os\"\n    \"bufio\"\n    \"strings\"\n    \"strconv\"\n    \"encoding/json\"\n)\n\nfunc aggressiveCows(stalls []int, c int) int {\n    \n}\n\nfunc main() {\n    scanner := bufio.NewScanner(os.Stdin)\n    if !scanner.Scan() { return }\n    line := scanner.Text()\n    \n    \n    \n    \n    \n    \n        var nums []int\n        aIdx := strings.Index(line, \"[\")\n        aEnd := strings.Index(line, \"]\") + 1\n        json.Unmarshal([]byte(line[aIdx:aEnd]), &nums)\n        tIdx := strings.LastIndex(line, \"=\") + 1\n        target, _ := strconv.Atoi(strings.TrimSpace(line[tIdx:]))\n        res := aggressiveCows(nums, target)\n\n    b, _ := json.Marshal(res); fmt.Println(strings.ToLower(string(b)))\n}"
    },
    "referenceSolutions": {
      "JAVASCRIPT": "var aggressiveCows = function(stalls, c) {\n    stalls.sort((a, b) => a - b);\n    function canPlace(minDist) {\n        let count = 1, last = stalls[0];\n        for (let i = 1; i < stalls.length; i++) {\n            if (stalls[i] - last >= minDist) { count++; last = stalls[i]; }\n        }\n        return count >= c;\n    }\n    let lo = 1, hi = stalls[stalls.length-1] - stalls[0];\n    while (lo < hi) {\n        const mid = (lo + hi + 1) >> 1;\n        if (canPlace(mid)) lo = mid;\n        else hi = mid - 1;\n    }\n    return lo;\n};",
      "PYTHON": "class Solution:\n    def aggressiveCows(self, stalls, c):\n        stalls.sort()\n        def can_place(min_dist):\n            count, last = 1, stalls[0]\n            for s in stalls[1:]:\n                if s - last >= min_dist: count += 1; last = s\n            return count >= c\n        lo, hi = 1, stalls[-1]-stalls[0]\n        while lo < hi:\n            mid = (lo+hi+1)//2\n            if can_place(mid): lo = mid\n            else: hi = mid-1\n        return lo",
      "JAVA": "class Solution {\n    boolean canPlace(int[] stalls, int c, int d){\n        int count=1,last=stalls[0];\n        for(int s:stalls) if(s-last>=d){count++;last=s;}\n        return count>=c;\n    }\n    public int aggressiveCows(int[] stalls, int c) {\n        Arrays.sort(stalls);\n        int lo=1,hi=stalls[stalls.length-1]-stalls[0];\n        while(lo<hi){int mid=(lo+hi+1)/2;if(canPlace(stalls,c,mid))lo=mid;else hi=mid-1;}\n        return lo;\n    }\n}",
      "CPP": "class Solution {\n    bool canPlace(vector<int>& stalls, int c, int d){\n        int count=1,last=stalls[0];\n        for(int s:stalls) if(s-last>=d){count++;last=s;}\n        return count>=c;\n    }\npublic:\n    int aggressiveCows(vector<int>& stalls, int c) {\n        sort(stalls.begin(),stalls.end());\n        int lo=1,hi=stalls.back()-stalls[0];\n        while(lo<hi){int mid=(lo+hi+1)/2;if(canPlace(stalls,c,mid))lo=mid;else hi=mid-1;}\n        return lo;\n    }\n};",
      "GO": "func aggressiveCows(stalls []int, c int) int {\n    sort.Ints(stalls)\n    canPlace := func(d int) bool {\n        count, last := 1, stalls[0]\n        for _, s := range stalls[1:] { if s-last >= d { count++; last = s } }\n        return count >= c\n    }\n    lo, hi := 1, stalls[len(stalls)-1]-stalls[0]\n    for lo < hi {\n        mid := (lo+hi+1)/2\n        if canPlace(mid) { lo = mid } else { hi = mid-1 }\n    }\n    return lo\n}"
    }
  }
];

  // Insert problems into database
  for (const p of problems) {
    const existing = await prisma.problem.findFirst({
      where: { title: p.title }
    });

    if (existing) {
      console.log(`⚠️  Skipping "${p.title}" (already exists)`);
      continue;
    }

    await prisma.problem.create({
      data: {
        ...p,
        userId: adminUser.id,
      }
    });
    console.log(`✅ Inserted: ${p.title}`);
  }

  console.log('✨ Seeding finished successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
