import { ContractBuilder } from "../structures/ContractBuilder";

import { Address } from "viem";

import { ERC20 } from "../structures/ERC20";
import { IOwnable, Ownable, AccessControl, IAccessControl, AccessManaged, IAccessManaged } from "../structures/access";
import {
  ERC20Mintable, IERC20Mintable, ERC20Pausable, IERC20Pausable,
  ERC20Burnable, IERC20Burnable, ERC20FlashMint, IERC20FlashMint
} from "../structures/ERC20/extensions";
import { IClient } from "../types/Client";
import { IContractConfig } from "../types/Contracts";

/**
 * An Builder allowing to build instance of ERC20 token using a custom configuration
 * @param client The client to use for contract creation
 */
export class ERC20Builder<T = ERC20> extends ContractBuilder {
  constructor(protected client: IClient) {
    super(ERC20);
  };

  /**
   * a contract with `AccessManager` allows certain callers to access certain functions.
   * this extension allows to access all functions related to authority management.
   * 
   * @returns The updated builder with `AccessManager` extension.
   */
  setAccessManaged(): ERC20Builder<T & IAccessManaged> {
    return this.setExtension(AccessManaged);
  }

  /**
   * a contract with `AccessControl` allows role-based accesscontrol mechanisms.
   * this extension allows to access all functions related to roles management.
   * 
   * @returns The updated builder with `AccessControl` extension.
   */
  setAccessControl(): ERC20Builder<T & IAccessControl> {
    return this.setExtension(AccessControl);
  };

  /**
   * a contract with `Ownable` allows an owner to access certain functions.
   * this extension allows to access all functions related ownership management.
   * 
   * @returns The updated builder with `Ownable` extension.
   */
  setOwnable(): ERC20Builder<T & IOwnable> {
    return this.setExtension(Ownable);
  };

  setMintable(): ERC20Builder<T & IERC20Mintable> {
    return this.setExtension(ERC20Mintable);
  };

  setPausable(): ERC20Builder<T & IERC20Pausable> {
    return this.setExtension(ERC20Pausable);
  };

  setBurnable(): ERC20Builder<T & IERC20Burnable> {
    return this.setExtension(ERC20Burnable);
  };

  setFlashMint(): ERC20Builder<T & IERC20FlashMint> {
    return this.setExtension(ERC20FlashMint);
  };

  get(address: Address): T {
    return this.build({
      client: this.client,
      address,
    } as IContractConfig);
  }
};