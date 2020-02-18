export interface ICandidateProfile {
    name: string;
    email: string;
    webAddress: string;
    coverLetter: string;
    likeWorking: boolean;
    resume: {
        filename: string;
        filetype: string;
        filesize: string;
        filedata: string;
    };
}
