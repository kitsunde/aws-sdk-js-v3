// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { DBSecurityGroupMessage, DescribeDBSecurityGroupsMessage } from "../models/models_1";
import { de_DescribeDBSecurityGroupsCommand, se_DescribeDBSecurityGroupsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link DescribeDBSecurityGroupsCommand}.
 */
export interface DescribeDBSecurityGroupsCommandInput extends DescribeDBSecurityGroupsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSecurityGroupsCommand}.
 */
export interface DescribeDBSecurityGroupsCommandOutput extends DBSecurityGroupMessage, __MetadataBearer {}

/**
 * @public
 * <p>Returns a list of <code>DBSecurityGroup</code> descriptions. If a <code>DBSecurityGroupName</code> is specified,
 *             the list will contain only the descriptions of the specified DB security group.</p>
 *          <note>
 *             <p>EC2-Classic was retired on August 15, 2022. If you haven't migrated from EC2-Classic to a VPC, we recommend that
 *                 you migrate as soon as possible. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the
 *                 <i>Amazon EC2 User Guide</i>, the blog <a href="http://aws.amazon.com/blogs/aws/ec2-classic-is-retiring-heres-how-to-prepare/">EC2-Classic Networking is Retiring –
 *                     Here’s How to Prepare</a>, and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.Non-VPC2VPC.html">Moving a DB instance not in a VPC
 *                         into a VPC</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSecurityGroupsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSecurityGroupsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSecurityGroupsMessage
 *   DBSecurityGroupName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * const response = await client.send(command);
 * // { // DBSecurityGroupMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSecurityGroups: [ // DBSecurityGroups
 * //     { // DBSecurityGroup
 * //       OwnerId: "STRING_VALUE",
 * //       DBSecurityGroupName: "STRING_VALUE",
 * //       DBSecurityGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       EC2SecurityGroups: [ // EC2SecurityGroupList
 * //         { // EC2SecurityGroup
 * //           Status: "STRING_VALUE",
 * //           EC2SecurityGroupName: "STRING_VALUE",
 * //           EC2SecurityGroupId: "STRING_VALUE",
 * //           EC2SecurityGroupOwnerId: "STRING_VALUE",
 * //         },
 * //       ],
 * //       IPRanges: [ // IPRangeList
 * //         { // IPRange
 * //           Status: "STRING_VALUE",
 * //           CIDRIP: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBSecurityGroupArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSecurityGroupsCommandInput - {@link DescribeDBSecurityGroupsCommandInput}
 * @returns {@link DescribeDBSecurityGroupsCommandOutput}
 * @see {@link DescribeDBSecurityGroupsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSecurityGroupsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSecurityGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSecurityGroupName</code> doesn't refer to an existing DB security group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @example To list DB security group settings
 * ```javascript
 * // This example lists settings for the specified security group.
 * const input = {
 *   "DBSecurityGroupName": "mydbsecuritygroup"
 * };
 * const command = new DescribeDBSecurityGroupsCommand(input);
 * await client.send(command);
 * // example id: describe-db-security-groups-66fe9ea1-17dd-4275-b82e-f771cee0c849
 * ```
 *
 */
export class DescribeDBSecurityGroupsCommand extends $Command<
  DescribeDBSecurityGroupsCommandInput,
  DescribeDBSecurityGroupsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: DescribeDBSecurityGroupsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeDBSecurityGroupsCommandInput, DescribeDBSecurityGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeDBSecurityGroupsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBSecurityGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: DescribeDBSecurityGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeDBSecurityGroupsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDBSecurityGroupsCommandOutput> {
    return de_DescribeDBSecurityGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
