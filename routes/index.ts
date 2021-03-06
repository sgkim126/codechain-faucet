import * as express from "express";
import { Context } from "../context";

export function createRouter(context: Context) {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.render("index", {
            title: "CodeChain Faucet",
            recaptchaSiteKey: context.config.recaptchaSiteKey,
            googleAnalyticsId: context.config.googleAnalyticsId,
            marketingText: context.config.marketingText,
            facebookExampleURL: context.config.facebookExampleURL,
            twitterExampleURL: context.config.twitterExampleURL,
            twitterShareText: encodeURIComponent(
                context.config.twitterShareText
            ),
            testnetURL: context.config.testnetURL,
            faucetURL: context.config.faucetURL
        });
    });

    return router;
}
