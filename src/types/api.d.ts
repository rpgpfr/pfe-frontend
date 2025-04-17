declare module "api" {

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

    interface Campaign {
        name: string,
        slug: string,
        description?: string,
        type?: string,
        mood?: string,
        createdAt: Date,
    }
}