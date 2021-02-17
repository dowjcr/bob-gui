# Downing JCR's BOB GUI

This repository provides a GUI for listing and/or managing BOB ballot instances.

This bob-gui is branded and configured for Downing JCR, and also includes a custom self-identification script.

The original source code is available [here](https://github.com/cusu/bob-gui).

Thanks to CUSU and mvl22 for developing and maintaining the software - its age is showing but it is still very much
functional and our JCR depends on it!

## Credits

* Martin Lucas-Smith, Cambridge University Students' Union (initial code)
* Martin Lucas-Smith, Department of Geography, University of Cambridge (improvements, as open-sourced)
* Andrew Ying, JCR Vice-President 2017/18 (_Downing JCR_ branding and configuration)
* Lawrence Brown, JCR Internet Officer 2020/21 (Self-identification, minor improvements)

## License

The code is licensed under the version 2 of the GPL.

## Deployment

Good luck!

See CUSU's [bob-gui-deploy](https://github.com/cusu/bob-gui-deploy) for some hints - but don't run the script
verbatim under any circumstances, who knows what it will do to your server.

Some more hints:

 * Use apache2 and `mod_ucam_webauth` unless you want your life to be really hard
 * Set your VirtualHost's DOCUMENT\_ROOT to the path of the public\_html directory
 * The default configuration expects [BOB](https://github.com/cusu/bob) in `/var/www/voting/bob` and [OpenSTV](https://github.com/Conservatory/openstv) in `/var/www/voting/openstv`.
