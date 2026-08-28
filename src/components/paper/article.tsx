import { CompositionFigure } from "./composition-figure";
import { FrameFigure } from "./frame-figure";
import { MatrixFigure } from "./matrix-figure";
import { NativeFigure } from "./native-figure";
import { PoolFigure } from "./pool-figure";
import { PotentialFigure } from "./potential-figure";
import { ScaleFigure } from "./scale-figure";
import { Tex } from "./tex";
import { TransitivityFigure } from "./transitivity-figure";

export function Article({
  selected,
  onSelect,
}: {
  selected: { m: number; n: number };
  onSelect: (cell: { m: number; n: number }) => void;
}) {
  return (
    <article className="paper-prose">
      <section id="abstract" className="scroll-mt-24">
        <p className="mb-3 font-sans text-xs font-medium tracking-[0.18em] text-muted uppercase">
          Abstract
        </p>
        <p className="text-[1.05rem] leading-[1.65] text-ink-soft sm:text-lg">
          Consider the matrix{" "}
          <Tex i>{String.raw`R(m,n)=n^{n}/m^{m}`}</Tex>, formed by comparing
          the complete scales <Tex i>{String.raw`k^{k}`}</Tex> associated with
          different ranks. The matrix is easy to define, but its structure is
          less obvious at first sight. Each entry is a ratio of two finished
          scales; diagonal entries are 1; reversing a comparison produces a
          reciprocal. What is less immediately visible is that these same
          ratios already contain both a natural unit and a composition law.
        </p>
        <p className="mt-4 text-[1.05rem] leading-[1.65] text-ink-soft sm:text-lg">
          The path to that observation was indirect. Several constructions
          were attempted in order to give the matrix a dynamics or a
          geometry. None was successful. Each failure, however, imposed a
          useful constraint on the eventual construction. Those constraints
          point back to the matrix itself: a meeting can measure itself in
          its native logarithmic frame, and successive meetings compose
          because the intermediate scale cancels. Taking logarithms turns the
          same relation into a difference of scalar potentials{" "}
          <Tex i>{String.raw`s_k=k\ln k`}</Tex>. The main result is not the
          addition of a new structure, but the recognition of one that was
          already present.
        </p>
      </section>

      <hr className="running-rule my-10" />

      <section id="s1" className="scroll-mt-24">
        <SectionHead n="1" title="The finished scales" />
        <p className="drop-cap">
          The natural starting point is not the matrix but the scales from
          which the matrix is built. For each rank <Tex i>k</Tex>, define the
          complete scale
        </p>
        <Tex numbered="1">{String.raw`a_k=k^{k}.`}</Tex>
        <p>
          The exponent is the rank itself, so the scale is already finished.
          The first few are
        </p>
        <Tex>{String.raw`a_1=1,\quad a_2=4,\quad a_3=27,\quad a_4=256,\quad a_5=3125,\quad a_6=46656.`}</Tex>
        <p>
          The matrix records how these scales compare with one another:
        </p>
        <Tex numbered="2">{String.raw`R(m,n)=\dfrac{a_n}{a_m}=\dfrac{n^{n}}{m^{m}}.`}</Tex>
        <p>
          Every entry has a simple interpretation.{" "}
          <Tex i>{String.raw`R(m,n)`}</Tex> is the scale of rank{" "}
          <Tex i>n</Tex>, measured against the scale of rank{" "}
          <Tex i>m</Tex>. For example,{" "}
          <Tex i>{String.raw`a_2=2^{2}=4`}</Tex> and{" "}
          <Tex i>{String.raw`a_4=4^{4}=256`}</Tex>, so
        </p>
        <Tex numbered="3">{String.raw`R(2,4)=\dfrac{256}{4}=64.`}</Tex>
        <p>
          The number 64 is therefore not another independently constructed
          scale. It is the ratio between two scales that were already
          complete.
        </p>
        <p>
          This also explains the diagonal. When a rank is compared with
          itself,
        </p>
        <Tex numbered="4">{String.raw`R(m,m)=\dfrac{a_m}{a_m}=1.`}</Tex>
        <p>
          Thus <Tex i>{String.raw`R(m,m)=1`}</Tex> does not mean that the
          scale of rank <Tex i>m</Tex> is 1. It means that the scale is
          being measured against itself. The distinction is especially
          clear at rank 2:
        </p>
        <Tex>{String.raw`2^{2}=4,\qquad R(2,2)=1.`}</Tex>
        <p>
          The first is a scale. The second is an identity. The reciprocal
          relation follows just as directly:
        </p>
        <Tex numbered="5">{String.raw`R(m,n)\,R(n,m)=\dfrac{a_n}{a_m}\cdot\dfrac{a_m}{a_n}=1.`}</Tex>
        <p>
          So the entries <Tex i>{String.raw`R(m,n)`}</Tex> and{" "}
          <Tex i>{String.raw`R(n,m)`}</Tex> are one comparison read in
          opposite directions. At this point the matrix is completely
          defined. Nothing further has been imposed. That creates the real
          question of the paper: what else does this definition already
          imply?
        </p>
        <MatrixFigure selected={selected} onSelect={onSelect} />
        <ScaleFigure m={selected.m} n={selected.n} />
      </section>

      <section id="s2" className="scroll-mt-24">
        <SectionHead n="2" title="What appears to be missing" />
        <p>
          The reciprocal identity tells us how to reverse a meeting, but it
          does not immediately provide a language for measuring the meeting
          itself. Take
        </p>
        <Tex>{String.raw`R(2,4)=64,\qquad R(4,2)=\dfrac{1}{64}.`}</Tex>
        <p>
          These form a complementary pair because
        </p>
        <Tex numbered="6">{String.raw`64\cdot\dfrac{1}{64}=1.`}</Tex>
        <p>
          It is tempting to describe the two entries as complementary pools,
          with multiplication joining them and the reciprocal opening the
          opposite pool. That picture is useful, but it leaves two questions
          unanswered.
        </p>
        <p>
          First: what should count as one unit of a meeting? Second: how
          should one meeting combine with another? The first question is
          about measurement. The second is about composition.
        </p>
        <PoolFigure m={selected.m} n={selected.n} />
        <p>
          One could simply declare answers to both questions, but that would
          miss the central point. The matrix is already generated by a very
          specific family of completed scales. Any genuine structure should
          therefore emerge from that construction rather than being attached
          to it from outside. This is why the unsuccessful approaches are
          worth recording. They are attempts to answer precisely these two
          questions.
        </p>
      </section>

      <section id="s3" className="scroll-mt-24">
        <SectionHead n="3" title="Approaches that did not work" />
        <p>
          The failed constructions are not separate theories so much as a
          sequence of increasingly constrained attempts to extract something
          from the matrix. Each began with a reasonable intuition. Each then
          exposed a limitation that the successful construction would have
          to respect.
        </p>

        <SubHead id="s31" n="3.1" title="Explosive dimensional meeting as a binary operation" />
        <p>
          The first difficulty was composition. The matrix gives pairwise
          meetings, but it does not immediately advertise an operation that
          combines two rank labels into a third. An early attempt therefore
          combined ranks <Tex i>k</Tex> and <Tex i>\ell</Tex> by taking
          their product <Tex i>{String.raw`k\ell`}</Tex>, then assigning to
          that product its own completed scale{" "}
          <Tex i>{String.raw`(k\ell)^{k\ell}`}</Tex>. The motivation was
          natural: if two ranks combine, perhaps their product should
          determine the scale of the result.
        </p>
        <p>
          The construction failed because it reintroduced the very growth
          that made the original matrix difficult to manipulate. The
          function <Tex i>{String.raw`x^{x}`}</Tex> grows too quickly for
          repeated use as an operational encoding. After only a few
          iterations, normalised quantities become numerically unusable. But
          the deeper problem is more important than the numerical one. The
          quantities <Tex i>{String.raw`k^{k}`}</Tex> were already finished.
          Once two finished scales have been compared, there is no reason to
          finish them again.
        </p>
        <p>
          The failed operation therefore teaches the first constraint: if
          meetings compose, they should compose at the level of the ratios
          already stored in the matrix. That points toward ordinary
          multiplication rather than re-towering.
        </p>

        <SubHead id="s32" n="3.2" title="Continuous interpolation of the meeting" />
        <p>
          The failure of the discrete operation suggested another
          possibility: perhaps the difficulty came from discreteness itself.
          A continuous parameter <Tex i>t</Tex> was introduced so that a
          meeting could be regarded as a path, and a derivative could be
          taken at a chosen point. Such a construction is mathematically
          legitimate. The problem is that it does not explain the original
          matrix entry. It is possible to define a smooth object passing
          through <Tex i>{String.raw`R(2,4)=64`}</Tex>, but a derivative of
          that object describes motion in the newly introduced continuous
          space rather than revealing new structure in the original cell.
        </p>
        <p>
          The continuous theory is therefore formally available but
          structurally unmotivated. This gives a second constraint: do not
          replace the discrete finished object with a continuous theory
          unless the object itself requires one. The next attempt therefore
          remains discrete.
        </p>

        <SubHead id="s33" n="3.3" title="Energy pools without a unit" />
        <p>
          The reciprocal pair suggested a different language. One can
          picture 64 and <Tex i>{String.raw`1/64`}</Tex> as complementary
          pools whose product is 1. Addition might represent communication
          within a common level; multiplication might represent crossing
          between different meetings; reciprocity reverses the direction.
          The language is suggestive, but the same problem remains. What is
          the unit?
        </p>
        <p>
          The change from 1 to 64 cannot be called a large or small step
          without specifying what is being used as the ruler. Terms such as
          “wall,” “communication,” or “pool” describe an interpretation but
          do not define a quantitative scale. The energy picture therefore
          names a possible behaviour without supplying its measure. The
          third constraint follows: a genuine unit should come from the
          matrix itself rather than being declared by metaphor.
        </p>

        <SubHead id="s34" n="3.4" title="Treating the matrix as a lookup table" />
        <p>
          A more conservative possibility is to use{" "}
          <Tex i>{String.raw`R(m,n)`}</Tex> only as a table of reference
          ratios. This works. A quantity can be compared against a chosen
          cell, and the matrix can serve as a library of conversions. But
          that reading throws away the most important fact about the
          matrix: its entries are not arbitrary numbers. They are all
          generated from the same family{" "}
          <Tex i>{String.raw`a_k=k^{k}`}</Tex>.
        </p>
        <p>
          A table of unrelated positive numbers could serve as a lookup
          table just as well. The reciprocal identity and the relation
          between different triples of entries would play no essential
          role. The matrix would be consulted rather than understood. The
          fourth constraint is therefore: the relations among the entries
          must be part of the construction, not merely information stored
          in a table.
        </p>

        <SubHead id="s35" n="3.5" title="Forcing geometry too early" />
        <p>
          The remaining temptation was geometric. A finished scale might be
          pictured as a closed figure. A meeting might be an intersection. A
          reciprocal might be an inversion. Loops might become curves,
          radii, or circles. These pictures can be useful later, but at
          this stage they add assumptions without answering the original
          questions. Nothing in{" "}
          <Tex i>{String.raw`R(m,n)=n^{n}/m^{m}`}</Tex> yet tells us that a
          particular entry should represent a radius, that reciprocity
          should be a circle inversion, or that a meeting should occupy a
          particular geometric dimension.
        </p>
        <p>
          Geometry was being asked to supply a unit and a composition law
          before the algebra had supplied either. This leaves the fifth
          constraint: let the geometry follow from the algebra rather than
          asking geometry to explain the algebra prematurely.
        </p>

        <SubHead id="s36" n="3.6" title="What the failed approaches reveal" />
        <p>
          The five attempts now point in the same direction. The desired
          construction must stay at the scale of the entries, remain
          discrete, obtain its unit internally, use reciprocity as part of
          a broader relation, and avoid unnecessary geometric assumptions.
          The important question is therefore no longer: what new structure
          should be added? It becomes: what structure is already latent in
          the ratios themselves?
        </p>
        <p>
          That question leads to the two central observations of the paper.
          The first concerns the unit. The second concerns composition.
        </p>
      </section>

      <section id="s4" className="scroll-mt-24">
        <SectionHead n="4" title="A meeting can measure itself" />
        <p>
          Take any positive off-diagonal meeting{" "}
          <Tex i>{String.raw`r=R(m,n)\neq 1`}</Tex>. The simplest possible
          unit is already present in <Tex i>r</Tex>. Use the meeting itself
          as the base of the logarithm:
        </p>
        <Tex numbered="7">{String.raw`\varphi_r(x)=\log_{r}x.`}</Tex>
        <p>
          Then <Tex i>{String.raw`\varphi_r(r)=\log_{r}(r)=+1`}</Tex>.
          Because the reciprocal meeting is{" "}
          <Tex i>{String.raw`r^{-1}`}</Tex>,
        </p>
        <Tex numbered="8">{String.raw`\log_{r}(r)=+1,\qquad \log_{r}(r^{-1})=-1.`}</Tex>
        <p>
          The plus on <Tex i>{String.raw`+1`}</Tex> marks the step: one copy
          of the meeting in its own frame.{" "}
          <Tex i>{String.raw`-1`}</Tex> is the same step reversed. For the
          running example, <Tex i>{String.raw`r=R(2,4)=64`}</Tex>, so
        </p>
        <Tex>{String.raw`\log_{64}(64)=+1,\qquad \log_{64}\bigl(\tfrac{1}{64}\bigr)=-1.`}</Tex>
        <p>
          The large numerical pair <Tex i>{String.raw`(64,1/64)`}</Tex> has
          become <Tex i>{String.raw`(+1,-1)`}</Tex>. This is the native unit
          of the meeting.
        </p>
        <p>
          The significance is not that the identities in (8) are surprising.
          They are not. Their significance is structural: the matrix entry
          itself supplies the measuring base. A meeting does not need a
          ruler imported from elsewhere. The meeting can measure itself.
        </p>
        <NativeFigure m={selected.m} n={selected.n} />
      </section>

      <section id="s5" className="scroll-mt-24">
        <SectionHead n="5" title="Why the logarithmic change of register matters" />
        <p>
          The native base answers the unit question, but the logarithm also
          does something more general. In the original multiplicative
          language,
        </p>
        <Tex numbered="9">{String.raw`r\cdot r^{-1}=1.`}</Tex>
        <p>
          Under the logarithm,
        </p>
        <Tex numbered="10">{String.raw`\log_{r}r+\log_{r}(r^{-1})=(+1)+(-1)=0.`}</Tex>
        <p>
          The underlying structure has not changed. Only the register has
          changed. More generally,{" "}
          <Tex i>{String.raw`\log_{r}(xy)=\log_{r}x+\log_{r}y`}</Tex>.
          Multiplication of ratios therefore becomes addition of signed
          steps. This is exactly the kind of change of language the earlier
          constructions were seeking, but it comes directly from the
          multiplicative structure already present.
        </p>
      </section>

      <section id="s6" className="scroll-mt-24">
        <SectionHead n="6" title="Native and foreign frames" />
        <p>
          The distinction between a native unit and an external one becomes
          clearer when the same meeting is measured in several bases. For{" "}
          <Tex i>{String.raw`r=64`}</Tex>, the native measurement is{" "}
          <Tex i>{String.raw`\log_{64}(64)=+1`}</Tex>. But
        </p>
        <Tex>{String.raw`\ln 64\approx 4.159,\qquad \log_{2}64=6,\qquad \log_{10}64\approx 1.806.`}</Tex>
        <p>
          The meeting itself has not changed. Only the measuring frame has
          changed. There is therefore nothing contradictory about the
          statements <Tex i>{String.raw`\log_{64}64=+1`}</Tex> and{" "}
          <Tex i>{String.raw`\log_{4}64=+3`}</Tex>. The first says that 64
          is one unit in its own frame. The second says that 64 contains
          three powers of 4, because
        </p>
        <Tex numbered="11">{String.raw`64=4\times 4\times 4=4^{3}.`}</Tex>
        <p>
          For the rank-2 scale, <Tex i>{String.raw`2^{2}=4`}</Tex>, so the
          same meeting can be described as three rank-2 scale steps or as
          one native meeting step. These are two coordinate systems for the
          same number. The 3 is a count of fours, not a new rank.
        </p>
      </section>

      <section id="s7" className="scroll-mt-24">
        <SectionHead n="7" title="The composition law was already present" />
        <p>
          The unit question is now settled for a single meeting. The
          composition question turns out to have the same character: the
          needed law was already present in the definition of{" "}
          <Tex i>R</Tex>. Recall that{" "}
          <Tex i>{String.raw`R(m,n)=a_n/a_m`}</Tex>. Now consider two
          successive meetings, <Tex i>{String.raw`R(m,n)`}</Tex> followed by{" "}
          <Tex i>{String.raw`R(n,p)`}</Tex>. Multiplying them gives
        </p>
        <Tex numbered="12">{String.raw`R(m,n)\,R(n,p)=\dfrac{a_n}{a_m}\cdot\dfrac{a_p}{a_n}=\dfrac{a_p}{a_m}=R(m,p).`}</Tex>
        <p>
          The intermediate scale <Tex i>{String.raw`a_n`}</Tex> cancels.
          Nothing new has been introduced. The law follows from the fact
          that every meeting compares two members of one family of scales.
          This is ordinary multiplication of the numbers the matrix already
          stores — the constraint of §3.1, satisfied without re-towering.
        </p>
      </section>

      <section id="s8" className="scroll-mt-24">
        <SectionHead n="8" title="Transitivity is the cancellation of the waypoint" />
        <p>
          Equation (12) is the most important identity in the paper. Native
          bases of §§4–6 read a single pair. Everything that relates
          distinct meetings — composition, reciprocity, paths, loops, the
          potential — is this one cancellation, reread. It is worth slowing
          down.
        </p>

        <SubHead id="s81" n="8.1" title="What a waypoint is" />
        <p>
          A waypoint is a rank you pass through on the way from one rank to
          another. It is not a third meeting, and it is not a new scale
          mixed into the first two. It is a temporary name.
        </p>
        <p>
          The ordinary picture is a chain of comparisons. If A compared with
          B is the ratio <Tex i>{String.raw`B/A`}</Tex>, and B compared with
          C is the ratio <Tex i>{String.raw`C/B`}</Tex>, then A compared
          with C is
        </p>
        <Tex>{String.raw`\dfrac{B}{A}\cdot\dfrac{C}{B}=\dfrac{C}{A}.`}</Tex>
        <p>
          B appears once above the bar and once below it. It drops out. You
          do not keep a residue of B. You do not average A, B, and C. The
          detour through B and the direct comparison of A with C are the
          same number. Currency conversion is the same fact: dollars to
          euros, then euros to yen, is dollars to yen. The euro is a
          waypoint. If the two-step product disagreed with the direct rate,
          the market would be inconsistent. The matrix is that market, with
          finished scales in place of currencies.
        </p>

        <SubHead id="s82" n="8.2" title="Why the middle scale cancels" />
        <p>
          In the matrix the three quantities are finished scales, not
          arbitrary labels. Write them in:
        </p>
        <Tex>{String.raw`R(m,n)\,R(n,p)=\dfrac{a_n}{a_m}\cdot\dfrac{a_p}{a_n}.`}</Tex>
        <p>
          The first meeting puts the waypoint scale{" "}
          <Tex i>{String.raw`a_n`}</Tex> on top: it is the thing being
          measured. The second meeting puts the same scale on the bottom: it
          is now the stick. One copy of <Tex i>{String.raw`a_n`}</Tex> is
          therefore being used to cancel another copy of{" "}
          <Tex i>{String.raw`a_n`}</Tex>. What remains is
        </p>
        <Tex>{String.raw`\dfrac{a_p}{a_m}=R(m,p).`}</Tex>
        <p>
          That is (12) again, said slowly. Expanding the powers instead of
          the abbreviation <Tex i>{String.raw`a_k`}</Tex> is the same
          cancellation, with no remainder:
        </p>
        <Tex>{String.raw`\dfrac{n^{n}}{m^{m}}\cdot\dfrac{p^{p}}{n^{n}}=\dfrac{p^{p}}{m^{m}}.`}</Tex>
        <p>
          Two remarks, both arithmetic rather than interpretation. First,
          the identity holds for any positive integers{" "}
          <Tex i>m,n,p</Tex>. No ordering is assumed; the waypoint need not
          sit “between” the endpoints. Second, an arbitrary table of
          reciprocal numbers need not do this. Reciprocity{" "}
          <Tex i>{String.raw`R(m,n)\,R(n,m)=1`}</Tex> can hold for every
          pair while{" "}
          <Tex i>{String.raw`R(m,n)\,R(n,p)\neq R(m,p)`}</Tex> for some
          triple. Reciprocity is cheap. Transitivity is the extra structure,
          and this matrix has it because every entry is a ratio of two
          members of one family, not an independent pairwise guess.
        </p>

        <SubHead id="s83" n="8.3" title="The running detour" />
        <p>
          Keep the running ranks 2 and 4, and take 6 as a waypoint. The
          three finished scales are
        </p>
        <Tex>{String.raw`a_2=2^{2}=4,\qquad a_6=6^{6}=46656,\qquad a_4=4^{4}=256.`}</Tex>
        <p>
          Rank 2 is still the scale 4, not the identity cell 1. The detour
          is the two-step path <Tex i>{String.raw`2\to 6\to 4`}</Tex>. Before
          any number is evaluated, the waypoint must cancel:
        </p>
        <Tex>{String.raw`R(2,6)\,R(6,4)=\dfrac{a_6}{a_2}\cdot\dfrac{a_4}{a_6}=\dfrac{a_4}{a_2}=R(2,4).`}</Tex>
        <p>
          Now evaluate, keeping the powers until they reduce. The first
          leg is rank 6 measured against rank 2:
        </p>
        <Tex>{String.raw`R(2,6)=\dfrac{6^{6}}{2^{2}}=\dfrac{46656}{4}=11664.`}</Tex>
        <p>
          The second leg is rank 4 measured against rank 6. Write{" "}
          <Tex i>{String.raw`6^{6}=(2\cdot 3)^{6}=2^{6}\,3^{6}`}</Tex> and{" "}
          <Tex i>{String.raw`4^{4}=2^{8}`}</Tex>:
        </p>
        <Tex>{String.raw`R(6,4)=\dfrac{4^{4}}{6^{6}}=\dfrac{2^{8}}{2^{6}\,3^{6}}=\dfrac{2^{2}}{3^{6}}=\dfrac{4}{729}.`}</Tex>
        <p>
          The product of the legs is
        </p>
        <Tex>{String.raw`R(2,6)\,R(6,4)=11664\cdot\dfrac{4}{729}.`}</Tex>
        <p>
          Since <Tex i>{String.raw`729\cdot 16=11664`}</Tex>,
        </p>
        <Tex>{String.raw`11664\cdot\dfrac{4}{729}=16\cdot 4=64=\dfrac{256}{4}=\dfrac{a_4}{a_2}=R(2,4).`}</Tex>
        <p>
          The two-step journey and the one-step journey land on the same
          rational number. The waypoint scale 46656 was used and forgotten.
          Nothing of rank 6 remains in 64.
        </p>
        <div className="my-5 overflow-x-auto">
          <table className="paper-table">
            <thead>
              <tr>
                <th>Quantity</th>
                <th>Exact form</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Scale of 2
                </td>
                <td>
                  <Tex i>{String.raw`2^{2}`}</Tex>
                </td>
                <td>4</td>
              </tr>
              <tr>
                <td>
                  Waypoint scale of 6
                </td>
                <td>
                  <Tex i>{String.raw`6^{6}`}</Tex>
                </td>
                <td>46656</td>
              </tr>
              <tr>
                <td>
                  Scale of 4
                </td>
                <td>
                  <Tex i>{String.raw`4^{4}`}</Tex>
                </td>
                <td>256</td>
              </tr>
              <tr>
                <td>
                  First leg <Tex i>{String.raw`R(2,6)`}</Tex>
                </td>
                <td>
                  <Tex i>{String.raw`6^{6}/2^{2}`}</Tex>
                </td>
                <td>11664</td>
              </tr>
              <tr>
                <td>
                  Second leg <Tex i>{String.raw`R(6,4)`}</Tex>
                </td>
                <td>
                  <Tex i>{String.raw`4/729`}</Tex>
                </td>
                <td>
                  <Tex i>{String.raw`4/729`}</Tex>
                </td>
              </tr>
              <tr>
                <td>
                  Product of the legs
                </td>
                <td>
                  <Tex i>{String.raw`11664\cdot 4/729`}</Tex>
                </td>
                <td>64</td>
              </tr>
              <tr>
                <td>
                  Direct meeting <Tex i>{String.raw`R(2,4)`}</Tex>
                </td>
                <td>
                  <Tex i>{String.raw`4^{4}/2^{2}`}</Tex>
                </td>
                <td>64</td>
              </tr>
            </tbody>
          </table>
        </div>

        <SubHead id="s84" n="8.4" title="The other direction" />
        <p>
          Transitivity does not prefer the larger rank as waypoint. The
          same three ranks, walked <Tex i>{String.raw`2\to 4\to 6`}</Tex>,
          give the other meeting as the product. Before evaluation:
        </p>
        <Tex>{String.raw`R(2,4)\,R(4,6)=\dfrac{a_4}{a_2}\cdot\dfrac{a_6}{a_4}=\dfrac{a_6}{a_2}=R(2,6).`}</Tex>
        <p>
          The waypoint is now the scale of 4, which is 256. Evaluating,
        </p>
        <Tex>{String.raw`R(4,6)=\dfrac{6^{6}}{4^{4}}=\dfrac{2^{6}\,3^{6}}{2^{8}}=\dfrac{3^{6}}{2^{2}}=\dfrac{729}{4},`}</Tex>
        <p>
          so
        </p>
        <Tex>{String.raw`R(2,4)\,R(4,6)=64\cdot\dfrac{729}{4}=16\cdot 729=11664=R(2,6).`}</Tex>
        <p>
          Again the two-step product equals the direct meeting. The 256
          cancelled. Figure 5 lets the middle rank be chosen; the product
          matches the direct meeting for every choice. That is a test, not
          a decoration. If a later construction ever broke this equality,
          it would have left the ratio matrix.
        </p>
        <TransitivityFigure m={selected.m} n={selected.n} />

        <SubHead id="s85" n="8.5" title="Why this is the central fact" />
        <p>
          Section 3.1 tried to invent a composition law because the matrix
          did not appear to have one. The law is (12). It uses only the
          numbers already stored in the cells. It can be iterated without
          exploding. It does not require a native base, a logarithm, a
          pool, or a picture. Those readings come after, and they come
          because of it.
        </p>
        <p>
          Native bases remain the answer to the unit question: they tell
          you how to read one pair in units of itself. They do not tell you
          how two different pairs combine. Cancellation does. Once
          cancellation is in hand, the rest of the paper is rearrangement.
          Reciprocity is the detour that returns home (§9). A long path is
          a chain of waypoints, each of which cancels (§10). A closed loop
          is a path whose product is 1, because every scale that is
          introduced is later divided back out. The potential of §11 is the
          same cancellation written as a telescoping sum of heights.
        </p>
        <p>
          That is why the matrix is one object rather than a bag of pairs.
          An <Tex i>{String.raw`N\times N`}</Tex> block is determined by the{" "}
          <Tex i>N</Tex> finished scales{" "}
          <Tex i>{String.raw`a_1,\ldots,a_N`}</Tex> and by nothing else.
          Every apparent complexity among the entries is a ratio of two of
          those scales, and every apparent journey among the entries is a
          cancellation of the ones in between.
        </p>
      </section>

      <section id="s9" className="scroll-mt-24">
        <SectionHead n="9" title="Reciprocity is the simplest closed path" />
        <p>
          Once composition is recognised, reciprocity no longer needs to be
          treated as a separate principle. Take{" "}
          <Tex i>{String.raw`p=m`}</Tex> in (12):
        </p>
        <Tex numbered="13">{String.raw`R(m,n)\,R(n,m)=R(m,m)=1.`}</Tex>
        <p>
          So the reciprocal identity is simply the case where a two-step
          path returns to its starting point. This also explains the role
          of the diagonal: <Tex i>{String.raw`R(m,m)=1`}</Tex> is the
          multiplicative identity for these closed paths. The distinction
          between the scale <Tex i>{String.raw`a_m`}</Tex> and the identity{" "}
          <Tex i>{String.raw`R(m,m)`}</Tex> is therefore preserved while
          their roles in the larger structure become clear.
        </p>
      </section>

      <section id="s10" className="scroll-mt-24">
        <SectionHead n="10" title="Paths, loops, and consistency" />
        <p>
          The same cancellation works along any finite chain:
        </p>
        <Tex numbered="14">{String.raw`R(i_0,i_1)\,R(i_1,i_2)\cdots R(i_{k-1},i_k)=R(i_0,i_k).`}</Tex>
        <p>
          For a closed path, <Tex i>{String.raw`i_k=i_0`}</Tex>, the product
          is 1. So a consistent ratio system has a simple property: every
          closed loop returns to the identity. The ranks are the nodes; the
          matrix entries are directed ratios; composition follows a path;
          and a closed path must cancel completely. The structure is still
          one-dimensional in origin, because every edge ultimately comes
          from the same underlying collection of scales. That becomes
          explicit in the logarithmic representation.
        </p>
        <CompositionFigure m={selected.m} n={selected.n} />
      </section>

      <section id="s11" className="scroll-mt-24">
        <SectionHead n="11" title="The logarithmic potential" />
        <p>
          Section 8 showed that distinct meetings compose by cancellation.
          The product of ratios is exact, but it is still a product. The
          logarithm is the unique change of register that turns that product
          into a sum, and the sum then forces a single number to be attached
          to each rank. That number is the potential. It is the additive
          form of the whole matrix, not a new object sitting beside it.
        </p>

        <SubHead id="s111" n="11.1" title="Why a logarithm" />
        <p>
          Up to this point the matrix has been described multiplicatively. A
          meeting is a ratio <Tex i>{String.raw`R(m,n)`}</Tex>, and
          successive meetings compose by multiplication:
        </p>
        <Tex>{String.raw`R(m,n)\,R(n,p)=R(m,p).`}</Tex>
        <p>
          The next question is whether the same relation can be read as a
          sum of steps rather than a product of ratios. The map{" "}
          <Tex i>{String.raw`\log:\mathbb{R}_{>0}\to\mathbb{R}`}</Tex> is a
          group isomorphism from multiplication to addition. That is the
          entire reason for taking it. The identity that matters is
        </p>
        <Tex>{String.raw`\ln(xy)=\ln x+\ln y.`}</Tex>
        <p>
          Feed in the two-step product of §8:
        </p>
        <Tex>{String.raw`\ln\bigl(R(m,n)\,R(n,p)\bigr)=\ln R(m,n)+\ln R(n,p).`}</Tex>
        <p>
          The left side is <Tex i>{String.raw`\ln R(m,p)`}</Tex>, because the
          product <em>is</em> the direct meeting. Define
        </p>
        <Tex numbered="15">{String.raw`L(m,n)=\ln R(m,n).`}</Tex>
        <p>
          Then the right side is{" "}
          <Tex i>{String.raw`L(m,n)+L(n,p)`}</Tex>, and cancellation of a
          ratio becomes addition of two numbers:
        </p>
        <Tex>{String.raw`L(m,n)+L(n,p)=L(m,p).`}</Tex>
        <p>
          In the multiplicative register, the intermediate scale cancels as
          a factor. In the logarithmic register, the same intermediate
          quantity cancels as a term in a sum. Without the logarithm,
          composition is still true and still multiplicative. With it, the
          waypoint is no longer something that appears above and below a
          bar. It is a term that is added and then subtracted.
        </p>
        <p>
          For the running pair, <Tex i>{String.raw`R(2,4)=64`}</Tex>, so
        </p>
        <Tex>{String.raw`L(2,4)=\ln 64=6\ln 2\approx 4.159.`}</Tex>
        <p>
          The number <Tex i>{String.raw`6\ln 2`}</Tex> is not a new quantity
          added to the matrix. It is the existing meeting, read as a length.
        </p>
        <p>
          That is why the logarithm is taken <em>now</em>, and not in §4.
          Native bases already used a logarithm, but a local one: base{" "}
          <Tex i>r</Tex>, attached to one pair, answering the unit question
          for that pair. A native logarithm asks: how many units of this
          meeting are we? The logarithm in (15) is a global one. It does
          not choose a meeting as unit. It converts every meeting at once,
          so that the composition law can be read as ordinary addition of
          directed lengths. It asks: what additive displacement does this
          meeting represent, on a line that every other meeting also lives
          on? The first is a local choice of unit — a chart. The second is
          a common coordinate system. Those lengths will turn out, in
          §11.2, to be differences of one function of rank. The logarithm
          is what makes that next step visible.
        </p>
        <p>
          For the running pair the two jobs are visible at once. Base 64
          says <Tex i>{String.raw`\log_{64}64=+1`}</Tex>: the meeting is one
          copy of itself. The global logarithm says{" "}
          <Tex i>{String.raw`\ln 64=6\ln 2`}</Tex>: the same meeting is a
          definite length. Confusing the chart with the coordinate is how
          native bases get mistaken for a dynamics.
        </p>
        <p>
          The choice of natural log rather than{" "}
          <Tex i>{String.raw`\log_2`}</Tex> or{" "}
          <Tex i>{String.raw`\log_{10}`}</Tex> is a choice of unit on that
          line, not a choice of structure. Any two logarithms differ by a
          constant factor,
        </p>
        <Tex>{String.raw`\log_b x=\dfrac{\ln x}{\ln b}.`}</Tex>
        <p>
          So if <Tex i>{String.raw`L(m,n)`}</Tex> is written in natural log
          and <Tex i>{String.raw`L^{(b)}(m,n)=\log_b R(m,n)`}</Tex> is the
          same meeting in another base, then
        </p>
        <Tex>{String.raw`L^{(b)}(m,n)=\dfrac{L(m,n)}{\ln b}.`}</Tex>
        <p>
          Every length on the line is multiplied by the same constant{" "}
          <Tex i>{String.raw`1/\ln b`}</Tex>. For the running meeting that
          is visible at once:
        </p>
        <Tex>{String.raw`\ln 64=6\ln 2,\qquad \log_2 64=6,\qquad \log_{10}64=\dfrac{6\ln 2}{\ln 10}\approx 1.806.`}</Tex>
        <p>
          These are not three different facts about 64. They are one
          displacement, measured in three units. Changing the unit does not
          change cancellation. If every term is scaled by <Tex i>c</Tex>,
          then
        </p>
        <Tex>{String.raw`c\,L(m,n)+c\,L(n,p)=c\,L(m,p)`}</Tex>
        <p>
          is the same identity as{" "}
          <Tex i>{String.raw`L(m,n)+L(n,p)=L(m,p)`}</Tex>. The waypoint
          still cancels. A potential still exists: it is merely{" "}
          <Tex i>{String.raw`s_k^{(b)}=\log_b a_k=s_k/\ln b`}</Tex>, and
          differences of <Tex i>{String.raw`s^{(b)}`}</Tex> still recover
          the meetings. What is structural is that meetings become
          differences of a function of one rank. What is conventional is
          which positive number is called “one” on that line. Natural log
          is used from here on only because it makes{" "}
          <Tex i>{String.raw`s_k=k\ln k`}</Tex> tidy, not because base{" "}
          <Tex i>e</Tex> is latent in the matrix.
        </p>
        <p>
          What would <em>not</em> survive is refusing the logarithm
          altogether. The ratios would still be there:{" "}
          <Tex i>{String.raw`R(2,4)=64`}</Tex>,{" "}
          <Tex i>{String.raw`R(2,4)\,R(4,6)=R(2,6)`}</Tex>, loops still
          multiply to 1. But there would be no height attached to a rank,
          and therefore no directed length attached to a meeting. A path
          would remain a product of cells, not a sum of steps. Native bases
          could still read one pair as <Tex i>{String.raw`+1,-1`}</Tex>.
          They could not place that pair on a common line with the others.
          The logarithm is what turns a consistent family of ratios into a
          geometry of heights. Keep the ratios and drop the logarithm, and
          that geometry never appears.
        </p>
        <p>
          Once the matrix is in this additive register, the next question
          is the one §11.2 answers: can every meeting be written as the
          difference of two numbers attached separately to its two ranks?
        </p>

        <SubHead id="s112" n="11.2" title="From finished scale to height" />
        <p>
          The logarithm in §11.1 turned the multiplicative composition law
          into addition. We can now ask what each logarithmic meeting is
          actually adding. Start with the definition of the meeting,{" "}
          <Tex i>{String.raw`R(m,n)=a_n/a_m`}</Tex>. Taking the logarithm
          gives
        </p>
        <Tex>{String.raw`L(m,n)=\ln R(m,n)=\ln\Bigl(\dfrac{a_n}{a_m}\Bigr)=\ln a_n-\ln a_m.`}</Tex>
        <p>
          This is the important step. A meeting that originally looked like
          a comparison of two scales is now a difference between two
          quantities, one belonging to rank <Tex i>n</Tex> and one belonging
          to rank <Tex i>m</Tex>. Define that quantity for each rank by
        </p>
        <Tex>{String.raw`s_k=\ln a_k.`}</Tex>
        <p>
          Then every meeting becomes
        </p>
        <Tex numbered="17">{String.raw`L(m,n)=s_n-s_m.`}</Tex>
        <p>
          For the finished scales used here,{" "}
          <Tex i>{String.raw`a_k=k^{k}`}</Tex>, so
        </p>
        <Tex numbered="16">{String.raw`s_k=\ln(k^{k})=k\ln k.`}</Tex>
        <p>
          The word potential is useful because <Tex i>{String.raw`s_k`}</Tex>{" "}
          is a number attached to one rank, while{" "}
          <Tex i>{String.raw`L(m,n)`}</Tex> is the difference between two
          such numbers. The matrix of pairwise meetings can be generated
          from a single list of heights{" "}
          <Tex i>{String.raw`s_1,s_2,s_3,\ldots`}</Tex>. The meeting between
          two ranks is simply the directed displacement between their
          heights.
        </p>
        <p>
          This also makes transitivity almost unavoidable. For three ranks,
        </p>
        <Tex>{String.raw`L(m,n)+L(n,p)=(s_n-s_m)+(s_p-s_n)=s_p-s_m=L(m,p).`}</Tex>
        <p>
          The middle height cancels. So the additive composition law is not
          another rule imposed on the matrix. It is what necessarily happens
          when every meeting is a difference of two rank potentials.
        </p>
        <p>
          The running example makes this concrete. Since{" "}
          <Tex i>{String.raw`a_2=2^{2}=4`}</Tex> and{" "}
          <Tex i>{String.raw`a_4=4^{4}=256`}</Tex>, their heights are{" "}
          <Tex i>{String.raw`s_2=\ln 4`}</Tex> and{" "}
          <Tex i>{String.raw`s_4=\ln 256`}</Tex>. Therefore
        </p>
        <Tex>{String.raw`L(2,4)=s_4-s_2=\ln 256-\ln 4=\ln 64.`}</Tex>
        <p>
          The original meeting was <Tex i>{String.raw`R(2,4)=64`}</Tex>. The
          logarithmic description says that the same meeting is the
          displacement from the height of rank 2 to the height of rank 4.
          Nothing new has been added. The ratio has simply been decomposed
          into two endpoint quantities.
        </p>
        <p>
          This is the point at which the matrix stops looking like a
          collection of pairwise numbers. Each cell can be generated from
          the same one-dimensional set of rank heights. The matrix records
          differences between those heights. Adding a constant to every{" "}
          <Tex i>s_k</Tex> does not change the differences, so the zero of
          the potential is a choice of origin, not a fact about rank. Rank
          1 happens to sit at the origin because{" "}
          <Tex i>{String.raw`s_1=1\ln 1=0`}</Tex>, but that is a convenience
          of the formula, not a meaning assigned to rank 1.
        </p>

        <SubHead id="s113" n="11.3" title="The running values" />
        <p>
          The same heights can be written exactly in{" "}
          <Tex i>{String.raw`\ln 2`}</Tex>. Rank 2 is still the scale{" "}
          <Tex i>{String.raw`2^{2}=4`}</Tex>, so{" "}
          <Tex i>{String.raw`s_2=\ln 4=2\ln 2`}</Tex>. Rank 4 has{" "}
          <Tex i>{String.raw`a_4=256=2^{8}`}</Tex>, so{" "}
          <Tex i>{String.raw`s_4=\ln 256=8\ln 2`}</Tex>. The displacement is
        </p>
        <Tex>{String.raw`L(2,4)=s_4-s_2=8\ln 2-2\ln 2=6\ln 2=\ln(2^{6})=\ln 64.`}</Tex>
        <p>
          This is the same 64 as in (3). The logarithm has not produced a
          new number; it has named 64 as a displacement of{" "}
          <Tex i>{String.raw`6\ln 2`}</Tex> on the additive line. In the
          native base of the meeting, that displacement is one unit:
        </p>
        <Tex>{String.raw`\log_{64}64=\dfrac{L(2,4)}{\ln 64}=\dfrac{6\ln 2}{6\ln 2}=+1.`}</Tex>
        <p>
          In the native base of the rank-2 scale it is three units, because{" "}
          <Tex i>{String.raw`\ln 4=2\ln 2`}</Tex> and{" "}
          <Tex i>{String.raw`(6\ln 2)/(2\ln 2)=3`}</Tex>. The two charts of
          §6 are two ways of measuring the same displacement{" "}
          <Tex i>{String.raw`s_4-s_2`}</Tex>.
        </p>
        <PotentialFigure m={selected.m} n={selected.n} />

        <SubHead id="s114" n="11.4" title="Telescoping is cancellation" />
        <p>
          Write the detour of §8 additively. The waypoint is rank 6, with
        </p>
        <Tex>{String.raw`s_6=6\ln 6.`}</Tex>
        <p>
          The two legs are
        </p>
        <Tex>{String.raw`L(2,6)=s_6-s_2,\qquad L(6,4)=s_4-s_6.`}</Tex>
        <p>
          Adding them,
        </p>
        <Tex>{String.raw`(s_6-s_2)+(s_4-s_6)=s_4-s_2=L(2,4).`}</Tex>
        <p>
          The waypoint height cancels. This is (12) after taking logarithms:
          the same middle term, once plus and once minus, instead of once
          in the numerator and once in the denominator. Nothing is
          approximated. Exponentiating both sides recovers{" "}
          <Tex i>{String.raw`R(2,6)\,R(6,4)=R(2,4)`}</Tex>. The two
          registers are doing the same work.
        </p>
        <p>
          A long path is a telescoping sum. For ranks{" "}
          <Tex i>{String.raw`i_0,i_1,\ldots,i_k`}</Tex>,
        </p>
        <Tex>{String.raw`L(i_0,i_1)+L(i_1,i_2)+\cdots+L(i_{k-1},i_k)=s_{i_k}-s_{i_0}=L(i_0,i_k),`}</Tex>
        <p>
          which is the logarithm of (14). A closed path has{" "}
          <Tex i>{String.raw`i_k=i_0`}</Tex>, so the sum of displacements is
          zero, and the product of meetings is 1. Consistency of loops is
          the statement that you have returned to the same height.
        </p>

        <SubHead id="s115" n="11.5" title="The converse" />
        <p>
          Existence of a potential is not extra to transitivity. It is
          equivalent to it. If a real matrix{" "}
          <Tex i>{String.raw`L(m,n)`}</Tex> satisfies
        </p>
        <Tex>{String.raw`L(m,n)+L(n,p)=L(m,p)`}</Tex>
        <p>
          for every triple, then the assignment{" "}
          <Tex i>{String.raw`s_k=L(1,k)`}</Tex> — or{" "}
          <Tex i>{String.raw`s_k=L(k_0,k)`}</Tex> for any fixed origin{" "}
          <Tex i>{String.raw`k_0`}</Tex> — recovers{" "}
          <Tex i>{String.raw`L(m,n)=s_n-s_m`}</Tex>. The potential is unique
          up to an additive constant. Conversely, every difference of a
          rank function is transitive. Exponentiating, a positive matrix
          is a ratio matrix{" "}
          <Tex i>{String.raw`R(m,n)=a_n/a_m`}</Tex> if and only if it is
          transitive, with <Tex i>{String.raw`a_k=e^{s_k}`}</Tex>.
        </p>
        <p>
          That is the precise sense in which the potential is the central
          additive object. Section 8 said the matrix is one family of
          scales, not a bag of pairs. Section 11 says the same thing as
          heights: the matrix is one function of rank, and a meeting is a
          difference. Native bases remain available as local units in
          which to read one such difference. They are charts on the
          potential, not a second source of structure.
        </p>
      </section>

      <section id="s12" className="scroll-mt-24">
        <SectionHead n="12" title="The multiplicative and additive pictures are equivalent" />
        <p>
          The relationship can now be summarised as{" "}
          <Tex i>{String.raw`R(m,p)=a_p/a_m`}</Tex> in multiplicative form,
          and <Tex i>{String.raw`L(m,p)=s_p-s_m`}</Tex> in additive form.
          The two registers contain the same information. In the first,{" "}
          <Tex i>{String.raw`R(m,n)`}</Tex> is a ratio. In the second,{" "}
          <Tex i>{String.raw`L(m,n)`}</Tex> is a directed displacement. The
          potential <Tex i>{String.raw`s_k=k\ln k`}</Tex> provides a common
          coordinate system for every meeting.
        </p>
        <p>
          The native base of §4 performs a different but compatible
          operation: it chooses one particular meeting as the unit of its
          own local logarithmic chart. Thus there are two levels of
          description. The potential gives a global additive coordinate. A
          native base gives a local unit attached to one meeting. The two
          should not be confused, but they fit together naturally.
        </p>
      </section>

      <section id="s13" className="scroll-mt-24">
        <SectionHead n="13" title="The natural geometry" />
        <p>
          Once the potential has been found, the simplest geometry is
          forced by it. Place each rank <Tex i>k</Tex> at the point{" "}
          <Tex i>{String.raw`s_k=k\ln k`}</Tex> on a line. Then the
          logarithmic meeting is the directed displacement{" "}
          <Tex i>{String.raw`s_n-s_m`}</Tex>. A path through an intermediate
          rank is a sum of line displacements. A closed loop has total
          displacement zero.
        </p>
        <p>
          The geometry therefore does not need circles, radii, curvature, or
          additional dimensions. The algebra itself supplies the simplest
          geometric picture: ranks occupy positions on a line, and meetings
          are directed differences between those positions. This explains
          why the earlier geometric constructions were premature. The
          useful geometry appears only after the underlying algebra has
          selected the appropriate coordinate.
        </p>
      </section>

      <section id="s14" className="scroll-mt-24">
        <SectionHead n="14" title="What is special about k^k" />
        <p>
          At this point an important distinction must be made. Most of the
          structure does not actually depend on the specific choice{" "}
          <Tex i>{String.raw`k^{k}`}</Tex>. Suppose instead that we choose
          any positive function <Tex i>f</Tex> of rank and define
        </p>
        <Tex numbered="18">{String.raw`R_f(m,n)=\dfrac{f(n)}{f(m)}.`}</Tex>
        <p>
          Then automatically <Tex i>{String.raw`R_f(m,m)=1`}</Tex>,{" "}
          <Tex i>{String.raw`R_f(m,n)\,R_f(n,m)=1`}</Tex>, and{" "}
          <Tex i>{String.raw`R_f(m,n)\,R_f(n,p)=R_f(m,p)`}</Tex>. Likewise,{" "}
          <Tex i>{String.raw`\ln R_f(m,n)=\ln f(n)-\ln f(m)`}</Tex> is still
          a difference of scalar potentials. Reciprocity, transitivity, path
          composition, closed-loop consistency, and logarithmic potentials
          are consequences of the ratio construction itself.
        </p>
        <p>
          What is special here is the modelling choice{" "}
          <Tex i>{String.raw`f(k)=k^{k}`}</Tex>. That choice gives the
          particular potential <Tex i>{String.raw`s_k=k\ln k`}</Tex> and the
          interpretation of <Tex i>{String.raw`k^{k}`}</Tex> as a finished
          scale whose exponent is the rank. The distinction matters because
          it tells us exactly which conclusions are structural and which
          depend on the chosen scale family.
        </p>
      </section>

      <section id="s15" className="scroll-mt-24">
        <SectionHead n="15" title="The growth hidden inside the potential" />
        <p>
          The potential <Tex i>{String.raw`s_k=k\ln k`}</Tex> also places
          the construction in a familiar asymptotic context. Stirling’s
          expansion gives
        </p>
        <Tex numbered="19">{String.raw`\ln k!=k\ln k-k+\tfrac12\ln(2\pi k)+\cdots.`}</Tex>
        <p>
          Thus <Tex i>{String.raw`k\ln k`}</Tex> is the leading term in the
          logarithmic growth of <Tex i>{String.raw`k!`}</Tex>. The
          significance here is not that factorials generate the reciprocal
          matrix. They do not. Rather, taking the logarithm of the finished
          scale <Tex i>{String.raw`k^{k}`}</Tex> transforms explosive
          multiplicative growth into the comparatively simple additive
          quantity <Tex i>{String.raw`k\ln k`}</Tex>. The logarithmic
          potential is therefore not an arbitrary coordinate. It is the
          natural additive description of the growth already encoded in the
          finished scale.
        </p>
      </section>

      <section id="s16" className="scroll-mt-24">
        <SectionHead n="16" title="Composition and change of frame" />
        <p>
          At this stage two operations have emerged, and it is useful to
          keep them separate. The first is composition:
        </p>
        <Tex>{String.raw`R(i,j)\,R(j,k)=R(i,k).`}</Tex>
        <p>
          This is a law of the matrix. The second is a change of logarithmic
          frame. For any positive bases <Tex i>b</Tex> and <Tex i>c</Tex>,
        </p>
        <Tex numbered="20">{String.raw`\varphi_c(x)=\varphi_b(x)\cdot\dfrac{\ln b}{\ln c}.`}</Tex>
        <p>
          Changing the base changes the numerical size of a step without
          changing the underlying quantity. For meetings, the same
          principle gives
        </p>
        <Tex numbered="21">{String.raw`\varphi_{jk}(x)=\varphi_{ij}(x)\cdot\dfrac{L(i,j)}{L(j,k)}.`}</Tex>
        <p>
          So composition tells us how meetings combine. Change of frame
          tells us how the same quantity is represented in another unit.
          The two operations are related, but they are not the same thing.
        </p>
        <FrameFigure m={selected.m} n={selected.n} />
      </section>

      <section id="s17" className="scroll-mt-24">
        <SectionHead n="17" title="When one meeting becomes an integer number of another" />
        <p>
          The relation between different native frames becomes especially
          simple when one meeting is an integer power of another. If{" "}
          <Tex i>{String.raw`r=b^{q}`}</Tex>, then{" "}
          <Tex i>{String.raw`\log_b r=q`}</Tex>. Thus a foreign meeting
          becomes an exact integer number of steps when the two meetings
          differ by an integer power. The running example gives{" "}
          <Tex i>{String.raw`64=4^{3}`}</Tex>, so{" "}
          <Tex i>{String.raw`\log_4 64=+3`}</Tex>, as already in §6.
          Likewise <Tex i>{String.raw`256=4^{4}`}</Tex>, so{" "}
          <Tex i>{String.raw`\log_4 256=+4`}</Tex>.
        </p>
        <p>
          These relations are more specific than reciprocity or
          transitivity. They depend on the particular numerical structure
          generated by <Tex i>{String.raw`a_k=k^{k}`}</Tex>. Up to rank 7,
          the notable relations of this kind are{" "}
          <Tex i>{String.raw`64=4^{3}`}</Tex> and{" "}
          <Tex i>{String.raw`256=4^{4}`}</Tex>, together with their
          reciprocals. A general characterisation for arbitrary positive{" "}
          <Tex i>f</Tex> remains a separate question.
        </p>
      </section>

      <section id="s18" className="scroll-mt-24">
        <SectionHead n="18" title="What the structure already supports" />
        <p>
          Once the ratio structure has been recognised, several uses follow
          without introducing new primitives. Suppose positive quantities{" "}
          <Tex i>{String.raw`f_1,\ldots,f_N`}</Tex> are compared only
          through their ratios{" "}
          <Tex i>{String.raw`R_{ij}=f_j/f_i`}</Tex>. Then relative scale is
          available without selecting an absolute unit in advance. If{" "}
          <Tex i>{String.raw`R_{AB}=3`}</Tex> and{" "}
          <Tex i>{String.raw`R_{BC}=2`}</Tex>, transitivity immediately
          gives <Tex i>{String.raw`R_{AC}=6`}</Tex>.
        </p>
        <p>
          The same structure gives a natural consistency condition for
          ratio networks. On a closed triangle,{" "}
          <Tex i>{String.raw`R_{ij}\,R_{jk}\,R_{ki}=1`}</Tex>. Taking
          logarithms gives the loop error
        </p>
        <Tex numbered="22">{String.raw`E_{\mathrm{loop}}=\ln R_{ij}+\ln R_{jk}+\ln R_{ki}.`}</Tex>
        <p>
          For an exact ratio system,{" "}
          <Tex i>{String.raw`E_{\mathrm{loop}}=0`}</Tex>. When observed
          ratios are noisy, loop errors provide a direct measure of
          inconsistency. The underlying scales can then be viewed as latent
          potentials whose differences approximate the observed logarithmic
          ratios. These uses do not require inventing another dynamics. They
          follow from the existing ratio structure.
        </p>
      </section>

      <section id="s19" className="scroll-mt-24">
        <SectionHead n="19" title="What remains open" />
        <p>
          The construction also clarifies what has not been determined. A
          native base can always turn a particular pair into a unit step.
          But the matrix does not by itself provide a rule for deciding
          which native frame should be selected next. Composition already
          tells us how to move through a sequence of ranks. The potential
          already provides a global additive description. A separate rule
          for choosing among frames would therefore be a genuinely
          additional dynamics rather than a consequence of the existing
          matrix.
        </p>
        <p>
          The same caution applies to higher-order extensions. A
          three-index meeting is not determined by the pairwise ratio
          structure alone. Any extension would need to reduce to the
          existing <Tex i>{String.raw`R(m,n)`}</Tex> on an appropriate
          slice and preserve the composition law. Nor does the logarithmic
          displacement itself constitute a separate energy. One may
          interpret <Tex i>{String.raw`E(m,n)=s_n-s_m`}</Tex> as a directed
          displacement, but that does not make it a new physical quantity.
          It is simply another representation of the logarithmic ratio. A
          richer interpretation would require additional structure that
          cannot be obtained merely by renaming <Tex i>L</Tex>.
        </p>
      </section>

      <section id="s20" className="scroll-mt-24">
        <SectionHead n="20" title="Conclusion" />
        <p>
          The reciprocal scale matrix begins with a very small amount of
          structure. Each rank <Tex i>k</Tex> has a finished scale{" "}
          <Tex i>{String.raw`a_k=k^{k}`}</Tex>. A meeting of two ranks is
          their ratio. From this alone, the diagonal is 1, and reversing a
          meeting gives its reciprocal.
        </p>
        <p>
          At first, two things appear to be missing: a unit for a meeting,
          and a rule for composing different meetings. Those gaps motivated
          several constructions. Re-towering combined ranks produced
          explosive growth and repeated a scale that was already finished.
          Continuous interpolation introduced structure that did not speak
          back to the discrete matrix. Energy-pool language described
          complementarity without defining a unit. A lookup-table
          interpretation discarded the generative relation between entries.
          Early geometry added assumptions before the algebra had
          determined what geometry was needed.
        </p>
        <p>
          Taken together, the failures point to a simpler answer. The unit
          is already inside each meeting: for a non-unit entry{" "}
          <Tex i>r</Tex>,{" "}
          <Tex i>{String.raw`\log_r r=+1`}</Tex> and{" "}
          <Tex i>{String.raw`\log_r(r^{-1})=-1`}</Tex>. The composition law
          is also already inside the matrix:{" "}
          <Tex i>{String.raw`R(m,n)\,R(n,p)=R(m,p)`}</Tex>, because the
          intermediate scale cancels. Reciprocity is the closed two-step
          case of this rule. Taking logarithms reveals the same structure
          additively, with <Tex i>{String.raw`s_k=k\ln k`}</Tex>.
        </p>
        <p>
          The multiplicative matrix, the reciprocal unit step, and the
          additive potential are not separate constructions. They are
          different readings of the same ratio structure. Energy language
          may be suggestive, but it is not the source of the unit. Geometry
          may be useful, but it should follow the coordinate structure
          rather than precede it. The most economical reading is therefore
          also the most internal one: finished scales, then ratios, then
          reciprocity, then transitivity, then native logarithmic units.
          The matrix did not need these structures to be added to it. It
          needed to be read closely enough for them to become visible.
        </p>
      </section>
    </article>
  );
}

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <h2 className="mb-5 font-serif text-2xl font-medium text-ink sm:text-3xl">
      <span className="mr-3 font-sans text-sm font-medium text-muted tabular-nums sm:text-base">
        {n}
      </span>
      {title}
    </h2>
  );
}

function SubHead({
  id,
  n,
  title,
}: {
  id: string;
  n: string;
  title: string;
}) {
  return (
    <h3
      id={id}
      className="mt-10 mb-4 scroll-mt-24 font-serif text-xl font-medium text-ink sm:text-2xl"
    >
      <span className="mr-2 font-sans text-sm font-medium text-muted tabular-nums">
        {n}
      </span>
      {title}
    </h3>
  );
}
