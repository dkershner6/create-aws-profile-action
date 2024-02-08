import { Node20GitHubActionTypescriptProject } from "dkershner6-projen-github-actions";
import { RunsUsing } from "projen-github-action-typescript";

const project = new Node20GitHubActionTypescriptProject({
    defaultReleaseBranch: "main",
    majorVersion: 1,
    devDeps: [
        "dkershner6-projen-github-actions",
        "projen-github-action-typescript",
    ],
    name: "create-aws-profile-action",
    description: "A GitHub Action to setup an AWS profile",

    projenrcTs: true,

    actionMetadata: {
        name: "Create AWS Profile Action",
        description: "Sets up an AWS profile in the file system",
        inputs: {
            key: {
                description: "The AWS_ACCESS_KEY_ID",
                required: true,
            },
            secret: {
                description: "The AWS_SECRET_ACCESS_KEY",
                required: true,
            },
            sessionToken: {
                description: "The AWS_SESSION_TOKEN",
                required: false,
            },
            profile: {
                description: "The profile name you want to setup",
                required: true,
            },
            region: {
                description: "The AWS region you want to use",
                required: true,
            },
        },
        runs: {
            using: RunsUsing.NODE_20,
            main: "dist/index.js",
        },
        branding: {
            icon: "paperclip",
            color: "orange",
        },
    },

    autoApproveOptions: {
        allowedUsernames: ["dkershner6"],
    },

    sampleCode: false,
    docgen: true,
});

project.synth();
