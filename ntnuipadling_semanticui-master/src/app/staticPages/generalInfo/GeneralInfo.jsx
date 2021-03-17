import React from 'react'
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Segment,
} from "semantic-ui-react";

export default function GeneralInfo() {
    return (
        
        <div>

         <Header
          as="h2"
          textAlign="center"
          content="Q & A - Join the club?"
          style={{ marginTop: 15 }}
         />
          <Header
          as="h3"
          textAlign="center"
          content="Tekst: Anders Lie Hagen   -  Oppdatert: Feb. 11, 2021, 7:18 p.m"
          style={{ marginTop: 15 }}
         />


          <Header
          as="h3"
          textAlign="left"
          content="Hva slags aktiviteter har NTNUI Padling?"
          style={{ marginTop: 15 }}
        />

         <Header
          as="h4"
          textAlign="left"
          content="Hva slags NTNUI Padling arrangerer felles turer og treninger både for havkajakk og elvekajakk. Vi har også kajakkpolo. Om vinteren har vi innendørs rulletreninger på Pirbadet. Se informasjon om klubbens aktiviteter på nettsiden eller på vår Facebook-side har NTNUI Padling?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"Hva slags aktiviteter har NTNUI Padling?"} </p>*/}

          <p> {"Hva slags NTNUI Padling arrangerer felles turer og treninger både for havkajakk og elvekajakk. Vi har også kajakkpolo. Om vinteren har vi innendørs rulletreninger på Pirbadet. Se informasjon om klubbens aktiviteter på nettsiden eller på vår Facebook-side har NTNUI Padling?"} </p>
          <Header
          as="h3"
          textAlign="left"
          content="Hva slags kurs har NTNUI Padling?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"Hva slags kurs har NTNUI Padling?"} </p>*/}
          <p> {"NTNUI Padling arrangerer grunnkurs for hav- og elvepadling hvert semester. Kursene kvalifiserer til Våttkort (se vaattkort.no). Tidspunkt annonseres i starten av hvert semester. Se arrangementer på vår Facebook-side."} </p>
          
          <Header
          as="h3"
          textAlign="left"
          content="Hvorfor skal jeg bli medlem?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"Hvorfor skal jeg bli medlem?"} </p>*/}
          <p> {"Som medlem i NTNUI Padling får du tilgang til klubbens utstyrslager på Skansen. Her kan du låne utstyr når du måtte ønske. Du kan også delta på turer og trengninger i regi av klubben."} </p>
          
          <Header
          as="h3"
          textAlign="left"
          content="Kan jeg bli medlem?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"Kan jeg bli medlem?"} </p>*/}
          Har du våttkort med oblat for grunnkurs hav eller elv, kan du bli medlem i NTNUI Padling. For å være medlem i padlegruppa må du være medlem av NTNUI. Kontingenten til NTNUI er inkludert i kjøp av halv- og helvårs treningsmedlemsskap fra Sit. Ønsker du KUN å være medlem i NTNUI koster dette kr 550,-.
For å bli medlem må du også betale utstyrsleie på kr 400,-. Utstyrsleie betales hvert studieår, og gjelder fra studiestart til ut august året etter. Ved betaling etter 1. januar koster utstyrsleie 300 kroner og gjelder ut august samme år. Dersom du har tatt grunnkurs hos NTNUI Padling får du inkludert utstyrsleie for ett år (inneværende semester og neste semester). Du finner betalingsinformasjon i linken under.
          <p> {""} </p>
         
          <Header
          as="h3"
          textAlign="left"
          content="Hvordan blir jeg medlem?"
          style={{ marginTop: 15 }}
          />
        
          {/*<p> {"Hvordan blir jeg medlem?"} </p>*/}
          <p> {"Registrer ditt medlemsskap her (https://forms.gle/1pGUJyA9BKwpd7ws6). Når medlemskapet er godkjent, vil du få tilsendt koden til utstyrslager på Skansen."} </p>
          
          <Header
          as="h2"
          textAlign="center"
          content="****ENGISH****"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"****ENGISH****"} </p>*/}
        
          <Header
          as="h3"
          textAlign="left"
          content="What kind of activities have NTNUI Padling?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"What kind of activities have NTNUI Padling?"} </p>*/}
          <p> {"NTNUI Padling arrange trips and practices for both sea and river kayaking. We also have kayak polo. During the winter we have indoors roll training in Pirbadet. See information about our activities on the webpage or the Facebook site."} </p>
          
          <Header
          as="h3"
          textAlign="left"
          content="What courses do we have?"
          style={{ marginTop: 15 }}
          />


          {/*<p> {"What courses do we have?"} </p>*/}
          <p> {"NTNUI Padling arrange basic kayak paddling course for both sea and river each semester. These courses give a «Våttkort»- certificate (see vaattkort.no). Specific times will be announced at the start of each semester. Se all our courses on our Facebook page."} </p>
          
          <Header
          as="h3"
          textAlign="left"
          content="Why should I become a member?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"Why should I become a member?"} </p>*/}
          <p> {"As a member of NTNUI Padling you get access to our equipment room at Skansen and have the possibility to borrow the equipment whenever you want. You can also join our trips and practices."} </p>
          
          <Header
          as="h3"
          textAlign="left"
          content="Can I be a member?"
          style={{ marginTop: 15 }}
          />
          
          {/*<p> {"Can I be a member?"} </p>*/}
          If you have a basic kayak paddling course ("Våttkort") for sea or river, you can join NTNUI Padling. To be a member of the paddle group, it is required to be a member of NTNUI. The subscription to NTNUI is included if you have 1 year/6 months-membership at Sit treningssenter (the Sit gym). If you only want to be a member of NTNUI, this costs 550 NOK.
To be a member you also have to pay a fee for equipment lease at 400 NOK. This is paid every academic year, and is valid from the start of the school year to August the following year. Payment after January 1st cost 300 NOK and is valid until August the same year. If you have taken a course from NTNUI Padling you have included equipment lease for one year (this and next semester). You find payment information in the link below.

          <p> {""} </p>

          <Header
          as="h3"
          textAlign="left"
          content="How do I join NTNUI Padling?"
          style={{ marginTop: 15 }}
          />

          {/*<p> {"How do I join NTNUI Padling?"} </p>*/}
          <p> {"Register your membership in this form (https://forms.gle/1pGUJyA9BKwpd7ws6). When your membership is approved, you will receive the code to the equipment shed at Skansen."} </p>
        
          <Header icon>
                  <Icon name="facebook official" color="blue" />
                </Header>
                <Button
                  as="a"
                  basic
                  className="link"
                  color="blue"
                  href="https://www.facebook.com/groups/ntnuipadling/"
                  content="Visit Page"
                />
            <Header icon>
                  <Icon name="instagram" color="orange" />
                </Header>
                <Button
                  as="a"
                  basic
                  className="link"
                  color="orange"
                  href="https://www.instagram.com/ntnuipadling/?hl=en"
                  content="Visit Page"
                />
          

        </div>
        
    )
}
