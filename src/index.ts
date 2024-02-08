import * as fs from "fs";
import * as os from "os";

import { getInput, info, setFailed } from "@actions/core";

const run = async (): Promise<void> => {
    try {
        const key = getInput("key") || "you forgot the key";
        const secret = getInput("secret") || "you forgot the secret";
        const profile = getInput("profile") || "you forgot the profile";
        const region = getInput("region") || "us-whatevs-1";
        const token = getInput("sessionToken");
        const awsConfigDir =
            getInput("aws_config_dir") || `${os.homedir()}/.aws`;

        info(`Setting up profile ${profile} in region ${region}...`);

        const credentials = `${awsConfigDir}/credentials`;
        const config = `${awsConfigDir}/config`;

        if (!fs.existsSync(awsConfigDir)) {
            fs.mkdirSync(awsConfigDir);
        }

        fs.appendFileSync(credentials, `[${profile}]\n`);
        fs.appendFileSync(credentials, `aws_access_key_id = ${key}\n`);
        fs.appendFileSync(credentials, `aws_secret_access_key = ${secret}\n`);

        if (token) {
            fs.appendFileSync(credentials, `aws_session_token = ${token}\n`);
        }

        fs.appendFileSync(config, `[profile ${profile}]\n`);
        fs.appendFileSync(config, `region = ${region}\n`);
    } catch (error) {
        setFailed((error as Error)?.message ?? "Unknown error");
    }
};

void run();
