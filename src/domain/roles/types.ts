export interface IRole {
    id?: string;

    title: string;


    user: {
        view: boolean;
        created: boolean;
        updated: boolean;
        deleted: boolean;
    };

    role: {
        view: boolean;
        created: boolean;
        updated: boolean;
        deleted: boolean;
    };

    job: {
        view: boolean;
        created: boolean;
        updated: boolean;
        deleted: boolean;
    };

    skill: {
        view: boolean;
        created: boolean;
        updated: boolean;
        deleted: boolean;
    };

    project: {
        view: boolean;
        created: boolean;
        updated: boolean;
        deleted: boolean;
    };

}