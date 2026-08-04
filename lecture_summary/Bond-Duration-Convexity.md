# Bond Duration & Convexity

## Key Concepts

- **Duration** measures a bond's price sensitivity to interest rate changes, in years. Rule of thumb: a 1% rate rise causes a price fall roughly equal to the duration (and vice versa).
  - *Macaulay Duration*: weighted-average time to receive all cash flows.
  - *Modified Duration*: converts Macaulay duration into a direct % price-change estimate per unit change in yield.
  - *Effective Duration*: used for bonds with embedded options (e.g., callables), where rate changes alter cash flow timing.
  - Longer time to maturity → higher duration → more rate sensitivity. Higher coupon rate → lower duration (capital returned faster).
- **Higher duration bonds**: not inherently better/worse, just more volatile. They gain more when rates fall, lose more when rates rise — a "seesaw" effect.
- **Convexity** captures the curvature of the price-yield relationship that duration (a straight-line approximation) misses.
  - *Positive convexity* (standard bonds): prices rise more on rate cuts than they fall on equivalent rate hikes — favors the investor.
  - *Negative convexity* (callable bonds, MBS): upside is capped by call/refinancing risk while downside remains.
  - Convexity rises with longer maturity and lower coupons; zero-coupon bonds have the highest convexity.
- **Higher convexity is generally better** (asymmetric protection) but comes at the cost of lower yields — investors pay for this "insurance."
- **Combined effect in rate hikes**: high-duration, high-convexity bonds still fall in price, but convexity cushions the loss versus a pure duration estimate.
- **Combined effect in rate cuts**: high-duration, high-convexity bonds (esp. long-dated zero-coupon bonds) see outsized price gains, as convexity amplifies the duration-driven appreciation.

## Why This Matters

This is technical/quantitative content — it involves bond pricing mechanics, sensitivity measures, and curvature concepts rather than macro narrative. For someone with only basic macroeconomics background (money supply, exchange rates, inflation, forex reserves), this would be **a moderate stretch**: the core intuition (rates up → bond prices down) is graspable, but the distinctions between Macaulay/modified/effective duration and the convexity math require some fixed-income/finance familiarity to fully internalize.

## Relevance to the Crisis Simulation

**Low.** This is bond-portfolio-level mechanics (useful for a bond trader or risk manager), not the macro/policy tradeoffs (rate decisions, forex intervention, IMF conditionality, political optics) that RBI, Finance Ministry, IMF, Fed, and political roles would need to navigate in a crisis role-play.
