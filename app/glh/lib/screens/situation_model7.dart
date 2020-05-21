import 'package:flutter/material.dart';
import 'package:glh/components/card_component.dart';
import 'package:glh/constants/constants.dart';
import 'package:glh/screens/question_card_page.dart';
import 'package:glh/screens/situation_model2.dart';

class SituationModel7 extends StatelessWidget {
  static const String id = 'situation_model7';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: color7,
      appBar: AppBar(backgroundColor: color8, title: Text('Situation Cards')),
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: SingleChildScrollView(
            child: Column(
              // crossAxisAlignment: CrossAxisAlignment.start,
              children: <Widget>[
                CardComponent(
                  color: color7,
                    onPressed: null,
                    delayAmountTime: 2,
                    text: 'If the property\n\n'
                        '1. is destroyed or unfit to live in\n'
                        '2. is needed for a public purpose'),
                CardComponent(
                  color: color7,

                    onPressed: null,
                    delayAmountTime: 2,
                    text: 'If the tenant\n\n'
                        '1. caused damage\n'
                        '2. caused danger\n'
                        '3. was threatening or intimidating\n'
                        '4. was violent, on certain properties\n'
                        '5. didn’t comply with an existing VCAT order\n'
                        '6. has failed to comply with their obligations under their agreement, including not paying rent when they could have without experiencing severe hardship\n'
                        '7. assigned/sublet without consent\n'
                        '8. kept a pet after VCAT had made an order for it to be excluded (removed)\n'
                        '9. used the property for an illegal purpose'),
                CardComponent(
                  color: color7,

                    onPressed: null,
                    delayAmountTime: 2,
                    text: 'For public housing\n\n'
                        '1. Tenant has committed a drug offence e.g, trafficking, supplying, cultivating etc\n'
                        '2. Tenant has committed an indictable offences\n'
                        '3. the landlord intends to repair, renovate,rebuild or demolish the rented premises\n'
                        "4. If the authorities were misleadingly or falsely induced as to the tenant's elgibility"),
                CardComponent(
                  color: color7,

                    onPressed: null,
                    delayAmountTime: 2,
                    text: 'If the landlord\n\n'
                        '1. is selling\n'
                        '2. needs to move (or their family)'),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
