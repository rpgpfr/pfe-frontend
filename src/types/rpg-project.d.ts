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
    interface InfoSection {
        description: string,
        type: string,
        ambiance: string,
    }

    interface Campaign {
        name: string,
        slug: string,
        infoSection?: InfoSection,
        mainQuest: Quest,
        createdAt: Date,
    }
}