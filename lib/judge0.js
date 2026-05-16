import axios from "axios";

export function getJudge0LanguageId(Language){
    const languageMap = {
        "javascript" : 63,
        "python":71,
        "go" : 60,
        "c" : 50,
        "java" : 62,
        "cpp" : 54
    }
    return languageMap[Language.toLowerCase()];
}

export function getLanguageName(id) {
    const languageMap = {
        63: "javascript",
        71: "python",
        60: "go",
        50: "c",
        62: "java",
        54: "cpp"
    }
    return languageMap[id] || "unknown";
}

const encode = (str) => {
    if (!str) return "";
    return Buffer.from(str).toString('base64');
};

const decode = (str) => {
    if (!str) return null;
    return Buffer.from(str, 'base64').toString('utf8');
};

export async function submitBatch(submissions){
    const encodedSubmissions = submissions.map(s => ({
        ...s,
        source_code: encode(s.source_code),
        stdin: encode(s.stdin),
        expected_output: encode(s.expected_output)
    }));

    const {data} = await axios.post(
        `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=true`,
        { submissions: encodedSubmissions }
    )

    console.log("Batch Submission Response : ", data);
    return data;
}

export async function pollBatchResults(tokens){
    while(true){
        const { data } = await axios.get(
            `${process.env.JUDGE0_API_URL}/submissions/batch`,
            {
                params:{
                    tokens: tokens.join(","),
                    base64_encoded : true,
                },
            }
        );

        console.log(data);
        const results = data.submissions;

        const isAllDone = results.every(
            (r)=>r.status.id !== 1 && r.status.id !==2
        )
        if(isAllDone) {
            return results.map(r => ({
                ...r,
                stdout: decode(r.stdout),
                stderr: decode(r.stderr),
                compile_output: decode(r.compile_output),
                message: decode(r.message)
            }));
        }

        await sleep(1000)
    }
}

export const sleep = (ms)=> new Promise((resolve)=>setTimeout(resolve,ms));
 