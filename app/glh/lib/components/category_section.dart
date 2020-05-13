// this widget is for Category section for the situation cards page.
import 'package:flutter/material.dart';
import 'package:glh/constants/constants.dart';

class CatergorySection extends StatefulWidget {
  CatergorySection({this.categoryTitle, this.situations});

  final String categoryTitle;
  List<Widget> situations = [];

  @override
  _CatergorySectionState createState() => _CatergorySectionState();
}

class _CatergorySectionState extends State<CatergorySection> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                MaterialButton(
                  onPressed: () {},
                  child: Card(
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(20),
                    ),
                    color: color9,
                    elevation: 2,
                    child: Padding(
                      padding: const EdgeInsets.all(8.0),
                      child: Text('${widget.categoryTitle}'),
                    ),
                  ),
                )
              ],
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: SingleChildScrollView(
                scrollDirection: Axis.horizontal,
                child: Row(
                  children: widget.situations,
                ),
              ),
            )
          ],
        ),
      ],
    );
  }
}
