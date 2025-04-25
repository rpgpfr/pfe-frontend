declare module "rpg-project" {

    interface UserProfile {
        username: string;
        email: string;
        firstName: string;
        lastName: string;
        signedUpAt: string;
        description: string | null;
        rpgKnowledge: string | null;
        campaignCount: number;
        mapCount: number;
        characterCount: number;
        resourceCount: number;
    }

}

declare module "rpg-project/campaign" {
    interface Info {
        description: string,
        type: string,
        mood: string,
    }

    interface Quest {
        title: string,
        type: string,
        description?: string,
        goals?: Goal[]
    }

    interface Goal {
        name: string,
        completed: boolean,
    }

    interface Campaign {
        name: string,
        slug: string,
        info?: Info,
        mainQuest: Quest,
        createdAt: Date,
    }
}