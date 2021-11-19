import Api from './Api';

class RecoveryToggler extends Api {
  constructor() {
    super({ name: 'RecoveryToggler' });
  }

  toggleRecoveryMode(param: { vault: Vault; mode: boolean }): boolean {
    return false;
  }
}
