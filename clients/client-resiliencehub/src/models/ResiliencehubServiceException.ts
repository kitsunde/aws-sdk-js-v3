// smithy-typescript generated code
import {
  ServiceException as __ServiceException,
  ServiceExceptionOptions as __ServiceExceptionOptions,
} from "@aws-sdk/smithy-client";

/**
 * @public
 *
 * Base exception class for all service exceptions from Resiliencehub service.
 */
export class ResiliencehubServiceException extends __ServiceException {
  /**
   * @internal
   */
  constructor(options: __ServiceExceptionOptions) {
    super(options);
    Object.setPrototypeOf(this, ResiliencehubServiceException.prototype);
  }
}
