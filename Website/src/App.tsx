import methods from "./assets/arrest method.png";
import types from "./assets/chart types.png";
import simple_citizen from "./assets/citizenship_simple.png";
import drugs from "./assets/drugs.png";
import gender from "./assets/gender.png";
import proportional from "./assets/proportional crimes.png";
//import select_drug from "./assets/select drug.png";
//import select_traffic from "./assets/Select Traffic.png";
import traffic from "./assets/traffic.png";
import by_day from "./assets/byday_recent.png";
import citizenship from "./assets/citizenship.png";
import xkcd from "./assets/xkcd.png";
import states from "./assets/states.png";
import detention_centers from "./assets/detention_centers.png";

import "./App.css";
import { Scrollable } from "./Scrollable";
import { Image } from "./Image";
import { Collapsible } from "./Collapsible";

/*TODO
correct padding (none) for scrollable images
abstract text-image fields
better imports? best practices?
SVG/XML stuff for pie chart selection
network visualization
banner at the top of page
*/

function App() {
  return (
    <>
      <section id="top">
        <Scrollable src={detention_centers} />
        <em>
          Motion of people from location of ICE arrest until eventual
          deportation
        </em>
      </section>

      <Collapsible title="Who is ICE?">
        <p>
          United States Immigration and Customs Enforcement (aka ICE) was
          created in 2002 under the Homeland Security Act as a federal agency
          for the enforcement of immigration laws as a matter of national
          security and public safety.{" "}
        </p>
        <p>
          ICE is split into two policing subdivisions—Homeland Security
          Investigations (HSI) &amp; Enforcement and Removal Operations (ERO)—as
          well as a handful of auxiliary divisions.
        </p>
        <p>
          ICE has arrested and deported millions of people. Just during Obama’s
          two terms in office, 2.4 million undocumented immigrants were deported
          by ICE, and millions more have been arrested in the years after.
        </p>
        <p>
          When Trump took office in 2016, he espoused hardline immigration
          policies and ingratiated himself to ICE, despite strengthening calls
          from the public for the abolition of the agency.{" "}
        </p>
        <p>
          During Trump’s ongoing second term, ICE has seen vast budget increases
          and deregulation. Trump has openly threatened protesters with illegal
          ICE retaliation. SCOTUS has ruled that ICE may legally racially
          profile when making arrests. HSI and ERO agents have been more often
          dressing undercover, wearing masks, and preparing ambushes in the
          hearts of towns.
        </p>
        <hr />
      </Collapsible>

      <Collapsible title="Our Stance">
        <p>
          We don’t want to pretend that we are unbiased or nonpartisan agents.
          This project was born in and made possible by radical abolitionist
          politics.
        </p>
        <p>
          We will not make arguments for or against the existence of ICE, and
          act from the premise that ICE is strictly an apparatus of state
          violence leveraged against the most vulnerable people in our
          communities. The problems with ICE are inherent to ICE from its
          initial goal and founding. Anything short of its total dismantling is
          not enough; <strong>ICE cannot simply be reformed.</strong>{" "}
        </p>
        <p>
          Instead, we focus on how ICE operates, with the explicit intent of
          disrupting and resisting the continued threat it poses to millions of
          people. We attend to both legislative and direct-action based forms of
          change-making, and believe both to be necessary.
        </p>
      </Collapsible>

      <Collapsible title="Melting ICE">
        <p>
          <b>
            <i>Data, Transparency, and Resistance</i>
          </b>
        </p>
        <p>
          ICE&#39;s behavior has changed in responses to various policies and
          budgeting decisions throughout the past 2.5 decades. Often, issues
          with ICE are presented as right-wing (or even specifically Trumpist)
          induced. A common counter-narrative will point out the obscene rates
          of deportation under the Obama administration, and the lack of any
          clean correlation between party politics and border policing.{" "}
        </p>
        <p>
          We decided to evaluate those claims using data from the{" "}
          <a href="https://deportationdata.org/">Deportation Data Project</a>,
          and found that arrest rates and deportations do in fact change
          administration-to-administration — but not quite how one would expect.
          Not only is there no clean correlation between specific
          administrations, but there is no clean correlation between many
          factors in the dataset which one would expect to be correlated. In
          light of many befuddling inconsistencies, we have elected to not
          consider raw values from differing presidential administrations
          inter-comparable.{" "}
        </p>
        <p>
          Let&#39;s step back a little though. What &quot;inconsistencies&quot;
          have made us distrust these data?
        </p>
        <p>
          <i>
            reminder: this is aggregated arrest data from the many FOIA releases
            distributed by the Deportation Data Project
          </i>
        </p>
        <p>
          First, let&#39;s just see the overall shape of things. Here&#39;s what
          arrest statistics look like by state:
        </p>

        <Image url={states} caption={"[ins top 5 states]"} />

        <p>
          So, let&#39;s assume (for now) that we can compare presidential
          administrations. Overall, arrests increase over time, with a bit of
          variance during transfers of power. It&#39;s a bit strange to see
          what&#39;s happening at those points, so let&#39;s look at some
          demographic data, just to make sure we&#39;re seeing spikes in arrests
          across the board rather than within specific groups.{" "}
        </p>

        <Image
          url={simple_citizen}
          caption={
            "reminder: we could not find 2013 arrest data, and have elected to interpolate that time span."
          }
        />
        <p>
          Well, that&#39;s a complication! Looking at it by citizenship country,
          we see the increase in arrests during the Biden administration comes
          entirely from non-Mexican arrestees. Perhaps Biden&#39;s ICE was
          particularly effective with ERO, but dropped the ball with CBP
          (resulting in far less arrests along the Mexican border)? Or maybe
          they just were worse at their jobs, incorrectly targeting more
          citizens of the USA? Let&#39;s check a breakdown by State—if it&#39;s
          either of these, we should see a single non-Mexico state as an outlier
          from 2021-2025:
        </p>
        <Image url={citizenship} caption={"2013 excluded from data"} />
        <p>
          Bummer. Seems like mostly across-the-board increases for everywhere
          but Mexico and Guatemala. Odd that following Trump&#39;s second
          inauguration, while Mexico remains less prevalent than
          &quot;everywhere else&quot;, that &quot;everywhere else&quot; becomes
          much more dominated by Guatemala and Honduras.{" "}
        </p>
        <p>
          Given how rapid these changes are with respect to inaugurations, it
          seems unlikely to be simply the outcome of policy changes (and
          besides, there aren&#39;t any policies that we could find which would
          explain this! If you can think of any, please let us know!). Maybe
          they&#39;re the result of counting changes then? An administration
          could selectively count arrests made by CPB (which would be majority
          Mexico) when recording ICE numbers to bias values up or down. Then
          again, that would be pretty odd to be also reflected on an ICE sheet,
          released under FOIA, in which every single arrest is labeled as
          &quot;ERO&quot;, without a single &quot;CBP&quot; in sight.
        </p>
        <p>
          Well, nevermind. We can see that there&#39;s something odd happening,
          but that doesn&#39;t on its own make the data untrustworthy. Just
          because we don&#39;t understand it doesn&#39;t mean we can&#39;t keep
          trying! So let&#39;s do a bit more demographic checking. It seems like
          most of our weird spikyness is the result of this Biden-administration
          change. How about we look at something that should, no matter what,
          look about the same: Gender
        </p>

        <Image url={gender} />

        <p>
          <em>What.</em>
        </p>
        <p>
          First, the obvious expected result: men are arrested far more often
          than women. Whether this is due to the demographics of border crossing
          or just the ways ICE profiles people, it still makes some degree of
          sense. What really breaks me is 2021. Why do arrests of women stay
          more or less constant until 2021. Why is all of the variance in arrest
          data accounted for by men until then? Why, in 2017, does the average
          number of men arrested per month spike by nearly 5000 in the span of a
          single month, while the number of women remains completely
          constant?{" "}
        </p>
        <p>
          We have no way to explain this. We, simply put, do not know what is
          going on, and do not expect that we can trust the pre-2021 data even
          remotely to the same extent as the post-2021 data. As a result, for
          any over-time style data, we will exclusively consider the post-2021
          dataset. For any data that is aggregative across time periods or based
          on proportions, we will check both a 2021-present and 2011-present
          version, to ensure that there are no fun and new jarring
          inconsistencies.{" "}
        </p>
        <p>
          So, without further ado, <br />
          <strong>What the fuck do we do about ICE?</strong>
        </p>
        <hr />
      </Collapsible>

      <Collapsible title="Legislative Strategies">
        <p>
          We can inhibit ICE&#39;s ability to detain and deport people.
          Unfortunately, anti-ICE policies are not always legislatively popular,
          so let&#39;s get clever with it!
        </p>
        <p>
          The two most common criminal charges for arrestees are drug charges
          &amp; traffic charges.{" "}
        </p>
        <Image
          url={types}
          caption="[selector for drug vs traffic to change text]"
        />
        <p>
          <em>Drug charges</em>
          <br />
          The most common drug-related charge is driving under the influence, at
          over double the frequency of its runner-up.
        </p>
        <Image url={drugs} />
        <p>
          <em>Traffic charges</em>
          <br />
          The most common traffic charge is intoxicated driving, with a
          runner-up of traffic stops.
        </p>
        <Image url={traffic} />

        <p>
          Because charges relating to intoxicated driving are almost entirely
          levied from traffic stops, we will claim that the most frequent
          criminal charges overwhelmingly result from traffic stops.{" "}
        </p>
        <p>
          For charged arrestees, deportation is disproportionately common, and
          nearly every charged arrestee is Hispanic.{" "}
        </p>

        <Image url={proportional} />

        <p>
          Running a basic logistic regression with Ethnicity &amp; Criminality
          as the only predictors of deportation across the entire dataset, a
          trained model held a Mean Squared Error of 0.228. Introducing the
          Charged variable into the mix reduced the MSE to 0.190, and adding
          various other demographic information (such as country of origin and
          gender) further lowered it to 0.187. This seems fairly intuitive—if
          there are demographic discrepancies in arrests, they likely will also
          appear in deportation.{" "}
        </p>
        <p>
          This hypothesis is thrown into question, however, when a regression
          using only Charged and Convicted yields the lowest MSE of all, at
          0.185! This indicates that these are not just strong predictors for
          deportation relative to other demographic data, but that demographic
          information is borderline irrelevant in comparison. As the MSE for
          Hispanic and Charged is nearly exactly the MSE for Hispanic and
          Convicted, we can assume that both factors have about equal relevance,
          demonstrating that while contact with the CJS alone is a major risk
          for undocumented individuals, convictions just as much need to be
          fought.{" "}
        </p>
        <p>
          In short,{" "}
          <strong>
            ICE makes arrests largely by capitalizing on the precarity of
            already marginalized people
          </strong>
          .
        </p>
        <p>
          The policing of borders and resulting production of an immigrant
          underclass is not a partisan matter. While legislation that directly
          targets ICE is vital, broader anti-policing legislation may be more
          effective in the short term.{" "}
        </p>
        <p>
          As the majority of ICE arrests are made of individuals already
          incarcerated in local jails &amp; facilities, preventing initial
          contact with the CJS is vital in protecting community members.{" "}
        </p>
        <p>
          Legislation that decriminalizes drug usage and that decreases police
          discretion in traffic stops would go a long way to reducing the
          options ICE has for making contact.
        </p>
        <hr />
      </Collapsible>

      <Collapsible title="Direct Action">
        <p>
          Legislation takes time to move through bureaucracy. Reforms are
          important, necessary ways that progress can be codified, and
          non-reformist reforms are the blood of abolition, but they do not help
          your neighbors today. Community and mutual aid, however, can stand in
          the way of this necropolitics. Undergrounds and support networks can
          facilitate help, and robust rapid-response systems can keep people
          away from police.{" "}
        </p>
        <p>
          One form of direct action is participatory defense: criminal
          convictions, once an ICE-arrestee has been charged with a crime, make
          their odds of deportation even worse. Community defense hubs, which
          have been very successful in reducing or even avoiding sentencing
          altogether, can help connect arrestees &amp; their families with
          lawyers, community aid and support, and can help advocate the cause in
          court.
        </p>
        <p>
          Communities can do even more. ICE arrests peak at 10:30am, though
          activity is high from mid-morning to early afternoon. This doesn&#39;t
          change between states, years, or administrations.{" "}
        </p>
        <Image url={by_day} />
        <p>
          While 60% of arrests are made in incarceration facilities, another 35%
          happen on the ground, during patrols and on street corners. Common
          locations include plazas and grocery stores, though this can very
          significantly between towns and cities.
        </p>
        <Image url={methods} />
        <p>
          Additionally, HSI and ERO agents make plenty of arrests, but local
          police acting under the{" "}
          <a href="https://www.tituslegaldesign.com/immigration-101/287g-program">
            287(g) program
          </a>{" "}
          may also conduct immigration arrests, and police contact of any sort
          increases the chance of ICE contact for individuals.{" "}
        </p>
        <p>
          Communication networks where “safe” individuals can scout frequented
          locations (such as main streets, plazas, grocery stores, schools, and
          residential areas) and then report any ICE or police-identified
          persons or vehicles let at-risk community members avoid rolling the
          dice.{" "}
        </p>
        <p>
          Alert systems that notify neighbors when an ICE arrest or raid is
          taking place can get observers on the scene fast who can then record
          information and distract officers. These alerts also enable friends
          and family to help take care of children, pets, finances, notifying
          employers, and other life events during a person’s detainment (or
          worse).{" "}
        </p>
        <p>
          ICE-watches can defend against ICE during events where at-risk
          individuals may be congregating, which helps to ensure the safety of
          attendees. Exit plans to avoid kettling should be pre-made, and the
          alert network should be pre-negotiated: you do not want to create a
          panic over every new Ford, but it is more important that ICE agents
          are spotted and the community protected before they can escalate.{" "}
        </p>
        <p>
          Areas like soup kitchens and thrift stores should be especially wary
          of nearby ICE or police presence, and the patterns of officers over
          time should be recorded to predict future action.{" "}
        </p>
        <p>
          At every turn, in every community, ICE should be avoided, inhibited,
          distracted, and neutralized to the best of everyone’s abilities.
        </p>
      </Collapsible>

      <Image url={xkcd} />
    </>
  );
}

export default App;
