import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <section>
      <Header title='Steam Railways' />
      <NavBar />
      <div id='landing-content'>
        <section className='app-introduction'>
          <p>
            Please register or login for a timeline of steam locomotives
            organised by age, complete with the locomotive designer and photos.
            In the logged in section, there are also links to a directory of
            preserved railways and steam videos.
          </p>
        </section>
        <article className='history'>
          <h3>Railway History</h3>
          <p>
            The railways developed from earlier horse drawn tramways, with
            wooden or cast iron rails. Railways were started in collieries or
            places of heavy industry where the coal or tin had to be transported
            to a nearby canal or port. Railways with steam locomotives were
            pioneered by Richard Trevithick in 1804 and a rack style railway
            engine was developed a little earlier by John Blenkinsop. John
            Blenkinsop worked in the Middleton colliery, near Leeds and at other
            mines in County Durham.
          </p>
          <p>
            Richard Trevithick worked in Cornwall (tin mines), and experimented
            with high pressure steam in his locomotives. On February 21, 1804,
            Trevithick’s steam engine hauled 10 tons of iron and 70 men nearly
            ten miles from Penydarren, at a speed of five mph, and winning a 500
            guinea bet into the bargain. He also invented a steam car - the
            London steam carriage, which wasn't very commercially successful as
            horses were cheaper and the steam carriage was uncomfortable.
          </p>
          <p>
            The Rainhill trials was a competition to test George Stephenson's
            argument that locomotives would have the best motive power for the
            nearly-complete Liverpool and Manchester Railway (L&MR). It was run
            from the 6 to 14 October 1829, and ten locomotives were entered
            including a wagon with a horse on a treadmill which was disqualified. Five
            locomotives were able to compete, running along a level track of 1
            mile Rainhill, in Lancashire (near Liverpool).
            <br />
            Stephenson's Rocket was the only locomotive to complete the trials,
            and was declared the winner. The directors of the L&MR accepted that
            locomotives should operate services on their new line, and George
            and Robert Stephenson were given the contract to produce locomotives
            for the railway.
          </p>
          <p>
            Having won the Rainhill trials George and Robert Stephenson set up a
            locomotive works and shipped their steam locomotives all over the
            world. Their main competitors were Hackworth and Bury, who made a
            slightly different style of locomotive including the Bury bar locomotive.
          </p>
          <p>
            While the railways were taking off and expanding Isambard Kingdom
            Brunel, who designed many ships and the Thames tunnel was appointed as
            the chief engineer of the Great Western Railway, one of the marvels
            of Victorian Britain, running from London to Bristol and later
            Exeter (in south west Britain, Exeter is near Cornwall). <br />
            It was Brunel's vision that passengers would be able to purchase one
            ticket at London Paddington station and travel from London to New
            York, changing from the Great Western Railway to the Great Western
            steamship at the last stop in Neyland, West Wales. Brunel used broad
            gauge (7 foot 3 inches) for the GWR which was not standard in that
            almost all British railways to date had used 4 foot 8 1/2 inches.
            This meant that the track layouts around stations were more complex.
            Stephenson's smaller gauge was standardised in 1848 and the broad
            gauge track and rolling stock were replaced. Brunel persisted with
            his broader gauge because he thought it was the optimum size for
            providing both higher speeds and a stable and comfortable ride to
            passengers. In addition the wider gauge allowed for larger goods
            wagons and thus greater freight capacity.
          </p>
          <p>
            In the 1800's many different railway companies were incorporated in
            Britain and throughout the world. More advanced train safety systems
            and signalling were developed after train crashes. Also,
            improvements to engineering and technology lead to better safety
            valves and more reliable steam locomotives. Earlier steam engines
            tended to suffer from boiler explosions due to faulty safety valves
            or poor metal working techniques.
          </p>
          <p>
            In 1923, the UK railway companies were grouped together into the 'big
            four'. These were the Southern Railway, the LMS (London, Midland and
            Scottish), the Great Western Railway and the LNER (London North
            Eastern).
          </p>
          <p>
            During the second world war the railways were used extensively for
            troops, and for refugees escaping London and the blitz. Most railway stations included extensive bomb shelters and free food and drink for military personnel. The
            austerity steam locomotives were introduced during this period and
            were designed to use coal more efficently.
          </p>
          <p>
            The big four became British Railways in 1948 and the locomotives
            were renumbered into classes. Many branch lines were closed and
            steam was phased out with the last steam train running in 1968. This
            was mainly due to a report by Dr Beeching, entitled the future of
            railways. The steam locomotives were phased out due to the newer
            diesel and electric locomotives lower running costs and higher
            reliability.
          </p>
          <h4>Heritage Preserved Lines</h4>
          <p>
            Some small standard gauge and narrow gauge lines were opened, and
            these were kept running by volunteers and steam enthusiasts. Many
            steam locomotives were rescued from scrap yards including the Barry
            scrap yard in Wales. Main line steam tours have also operated as a
            tourist holiday or charter on the rail network. These trips often
            last one or two days, with a dining car and dinner service provided
            on the train and they often operate in scenic parts of the country.
            An example would be the Settle and Carlisle Railway with the Ribblehead
            viaduct.
          </p>
          <p>
            There are now many preserved Railway lines, often with a mile or
            more (2km) of track. There are a mix of steam and diesel engines
            together with old wagons and coaches. Popular with tourists, they
            include cafes and shops in the old station buildings. Some of these
            organisations also provide locomotive driving or firing experiences for a
            fee.
          </p>
        </article>
      </div>
      <Footer />
    </section>
  );
};

export default HomePage;
