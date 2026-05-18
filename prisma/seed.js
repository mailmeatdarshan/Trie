const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Starting seeding...');

  // 1. Find an admin user to associate the problems with
  const adminUser = await prisma.user.findFirst({
    where: { role: 'ADMIN' }
  });

  if (!adminUser) {
    console.error('❌ Error: No ADMIN user found in database.');
    console.log('Please sign in as an admin through the app first so the system can record your user ID.');
    return;
  }

  console.log(`👤 Using Admin User: ${adminUser.email}`);

  // 2. Define your problems here
  // You can copy-paste this block for every new question you want to add
  const problems = [
    {
      title: "Palindrome Number",
      description: "Given an integer x, return true if x is a palindrome, and false otherwise.",
      difficulty: "EASY",
      tags: ["Math"],
      constraints: "-2^31 <= x <= 2^31 - 1",
      hints: "Try converting the integer to a string.",
      testCases: [
        { input: "121", output: "true" },
        { input: "-121", output: "false" },
        { input: "10", output: "false" }
      ],
      examples: {
        JAVASCRIPT: { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
        PYTHON: { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." }
      },
      codeSnippets: {
        JAVASCRIPT: "/**\n * @param {number} x\n * @return {boolean}\n */\nvar isPalindrome = function(x) {\n    \n};",
        PYTHON: "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        ",
        JAVA: "class Solution {\n    public boolean isPalindrome(int x) {\n        \n    }\n}",
        CPP: "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        \n    }\n};",
        GO: "func isPalindrome(x int) bool {\n    \n}"
      },
      referenceSolutions: {
        JAVASCRIPT: "var isPalindrome = function(x) {\n    if (x < 0) return false;\n    const str = x.toString();\n    return str === str.split('').reverse().join('');\n};",
        PYTHON: "class Solution:\n    def isPalindrome(self, x: int) -> bool:\n        if x < 0: return False\n        return str(x) == str(x)[::-1]",
        JAVA: "class Solution {\n    public boolean isPalindrome(int x) {\n        if (x < 0) return false;\n        int reversed = 0, remainder, original = x;\n        while (x != 0) {\n            remainder = x % 10;\n            reversed = reversed * 10 + remainder;\n            x /= 10;\n        }\n        return original == reversed;\n    }\n}",
        CPP: "class Solution {\npublic:\n    bool isPalindrome(int x) {\n        if (x < 0) return false;\n        long long reversed = 0;\n        int original = x;\n        while (x > 0) {\n            reversed = reversed * 10 + x % 10;\n            x /= 10;\n        }\n        return original == (int)reversed;\n    }\n};",
        GO: "func isPalindrome(x int) bool {\n    if x < 0 { return false }\n    s := strconv.Itoa(x)\n    for i := 0; i < len(s)/2; i++ {\n        if s[i] != s[len(s)-1-i] { return false }\n    }\n    return true\n}"
      }
    },
    {
      title: "Reverse Integer",
      description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
      difficulty: "MEDIUM",
      tags: ["Math"],
      constraints: "-2^31 <= x <= 2^31 - 1",
      testCases: [
        { input: "123", output: "321" },
        { input: "-123", output: "-321" },
        { input: "120", output: "21" }
      ],
      examples: {
        JAVASCRIPT: { input: "x = 123", output: "321" }
      },
      codeSnippets: {
        JAVASCRIPT: "/**\n * @param {number} x\n * @return {number}\n */\nvar reverse = function(x) {\n    \n};",
        PYTHON: "class Solution:\n    def reverse(self, x: int) -> int:\n        ",
        JAVA: "class Solution {\n    public int reverse(int x) {\n        \n    }\n}",
        CPP: "class Solution {\npublic:\n    int reverse(int x) {\n        \n    }\n};",
        GO: "func reverse(x int) int {\n    \n}"
      },
      referenceSolutions: {
        JAVASCRIPT: "var reverse = function(x) {\n    const limit = Math.pow(2, 31);\n    const sign = x < 0 ? -1 : 1;\n    const n = Math.abs(x).toString().split('').reverse().join('');\n    const result = sign * parseInt(n);\n    if (result < -limit || result > limit - 1) return 0;\n    return result;\n};",
        PYTHON: "class Solution:\n    def reverse(self, x: int) -> int:\n        sign = -1 if x < 0 else 1\n        x = abs(x)\n        res = int(str(x)[::-1]) * sign\n        if res < -2**31 or res > 2**31 - 1:\n            return 0\n        return res",
        JAVA: "class Solution {\n    public int reverse(int x) {\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n            if (rev > Integer.MAX_VALUE || rev < Integer.MIN_VALUE) return 0;\n        }\n        return (int) rev;\n    }\n}",
        CPP: "class Solution {\npublic:\n    int reverse(int x) {\n        long rev = 0;\n        while (x != 0) {\n            rev = rev * 10 + x % 10;\n            x /= 10;\n        }\n        if (rev < INT_MIN || rev > INT_MAX) return 0;\n        return (int)rev;\n    }\n};",
        GO: "func reverse(x int) int {\n    res := 0\n    for x != 0 {\n        res = res*10 + x%10\n        x /= 10\n    }\n    if res < -2147483648 || res > 2147483647 {\n        return 0\n    }\n    return res\n}"
      }
    }
  ];

  // 3. Insert problems into database
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
