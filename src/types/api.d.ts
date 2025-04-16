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
}