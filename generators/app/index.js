const chalk = require('chalk');
const utils = require('generator-jhipster/generators/utils');
const packagejs = require('../../package.json');
const semver = require('semver');
const BaseGenerator = require('generator-jhipster/generators/generator-base');

const jhipsterConstants = require('generator-jhipster/generators/generator-constants');

const SERVER_MAIN_SRC_DIR = jhipsterConstants.SERVER_MAIN_SRC_DIR;

const serverFiles = {
    server: [
        {
            condition: generator => generator.applicationType !== 'uaa',
            path: SERVER_MAIN_SRC_DIR,
            templates: [
                {
                    file: 'package/web/rest/AuthorityIndexResource.java',
                    renameTo: generator =>
                        `${
                            generator.packageFolder
                        }/web/rest/AuthorityIndexResource.java`
                }
            ]
        },
        {
            condition: generator => generator.applicationType === 'uaa',
            path: SERVER_MAIN_SRC_DIR,
            templates: [
                {
                    file: 'package/web/rest/AuthorityResource.java',
                    renameTo: generator =>
                        `${
                            generator.packageFolder
                        }/web/rest/AuthorityResource.java`
                }
            ]
        },
        {
            condition: generator => generator.applicationType === 'uaa',
            path: SERVER_MAIN_SRC_DIR,
            templates: [
                {
                    file: 'package/web/rest/vm/ManagedUsersAuthorityVM.java',
                    renameTo: generator =>
                        `${
                            generator.packageFolder
                        }/web/rest/vm/ManagedUsersAuthorityVM.java`
                }
            ]
        },
        {
            condition: generator => generator.applicationType === 'uaa',
            path: SERVER_MAIN_SRC_DIR,
            templates: [
                {
                    file: 'package/service/AuthorityService.java',
                    renameTo: generator =>
                        `${
                            generator.packageFolder
                        }/service/AuthorityService.java`
                }
            ]
        }
    ]
};

module.exports = class extends BaseGenerator {
    constructor(args, opts) {
        super(args, opts);
        this.context = {};
    }

    get initializing() {
        return {
            readConfig() {
                this.jhipsterAppConfig = this.getJhipsterAppConfig();
                if (!this.jhipsterAppConfig) {
                    this.error('Can\'t read .yo-rc.json');
                }
            },
            displayLogo() {
                this.log('');
                this.log(`${chalk.blue('██████╗ ')}${chalk.red('██')}${chalk.blue('╗ ██████╗ ██████╗ ██╗   ██╗ ██████╗ ')}`);
                this.log(`${chalk.blue('██╔══██╗██║██╔════╝ ██╔══██╗██║   ██║██╔════╝ ')}`);
                this.log(`${chalk.blue('██████╔╝██║██║  ███╗██████╔╝██║   ██║██║  ███╗')}`);
                this.log(`${chalk.blue('██╔══██╗██║██║   ██║██╔══██╗██║   ██║██║   ██║')}`);
                this.log(`${chalk.blue('██████╔╝██║╚██████╔╝██████╔╝╚██████╔╝╚██████╔╝')}`);
                this.log(`${chalk.blue('╚═════╝ ╚═╝ ╚═════╝ ╚═════╝  ╚═════╝  ╚═════╝ ')}`);
                this.log(chalk.white(`Running ${chalk.bold.blue('JHipster UAA Security Authority')} Generator! ${chalk.yellow(`v${packagejs.version}\n`)}`));
            },
            checkServerFramework() {
                if (this.jhipsterAppConfig.skipServer) {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for server...`);
                }
                if (this.jhipsterAppConfig.authenticationType !== 'uaa') {
                    this.env.error(`${chalk.red.bold('ERROR!')} This module works only for uaa authentication...`);
                }
            },
            checkJhipster() {
                const currentJhipsterVersion = this.jhipsterAppConfig
                    .jhipsterVersion;
                const minimumJhipsterVersion =
                    packagejs.dependencies['generator-jhipster'];
                if (
                    !semver.satisfies(
                        currentJhipsterVersion,
                        minimumJhipsterVersion
                    )
                ) {
                    this.warning(`\nYour generated project used an old JHipster version (${currentJhipsterVersion})... you need at least (${minimumJhipsterVersion})\n`);
                }
            }
        };
    }

    writing() {
        if (this.skipServer) return;

        // read config from .yo-rc.json
        this.baseName = this.jhipsterAppConfig.baseName;
        this.packageName = this.jhipsterAppConfig.packageName;
        this.packageFolder = this.jhipsterAppConfig.packageFolder;
        this.clientFramework = this.jhipsterAppConfig.clientFramework;
        this.clientPackageManager = this.jhipsterAppConfig.clientPackageManager;
        this.buildTool = this.jhipsterAppConfig.buildTool;
        this.upperCaseBaseName = this.baseName.toUpperCase();
        this.applicationType = this.jhipsterAppConfig.applicationType;

        // use function in generator-base.js from generator-jhipster
        this.angularAppName = this.getAngularAppName();

        if (this.applicationType !== 'uaa') {
            this.uaaBaseName = this.jhipsterAppConfig.uaaBaseName;
            this.uaaClassifyBaseName = utils.classify(this.uaaBaseName);
        }
        this.writeFilesToDisk(serverFiles, this, false);
    }

    end() {
        this.log('End of uaa-security-authority generator');
    }
};
