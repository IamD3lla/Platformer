import { generateMappings } from "../generalMappings"

export const level1Mappings = generateMappings("grass")

export const level1Layout = [

    //The section below needs to be above the next one because the first one will
    //be in the back of the next layer, so the sections above gets in the back to the next ones
    [

      "                              @                                                             ",
      "                                                                                            ",
      "                             9aab                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                             cdde                                                           ",
      "                                                                                            ",
      "                                                                                            ",
      "                                                                                            ",

    ],

    [

      "                                                                                                     ",
      "                                                                                                     ",
      "                                 @            @@                                                     ",
      "                                                                                 @@                  ",
      "                           @   9aab          9aab                      @                             ",
      "                               cdde          cdde                          9aaaboooo9aaab            ",
      "                          9aab cdde          cdde 9aab               9aab  cddde    cddde           @",
      "                          cdde cdde          cdde cdde          @    cdde  cddde    cddde    @       ",
      "                          cdde cdde          cdde cdde               cdde  cddde    cddde            ",
      "                   011111111111111111112oo011111111111111111112oooo0111111111112    011111111112     ",
      "                   344444444444444444445  344444444444444444445    3444444444445    344444444445     ",
      "                   677777777777777777778  677777777777777777778    6777777777778    677777777778     ",

    ],

    [

      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                   @@                        @@      @@ 9aab    ",
      "                                                                                        cdde    ",
      "                                                                                                ",
      "                                                                                                ",
      "                                                                                                ",

    ],
  ]