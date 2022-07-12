import { artemis } from 'src'
import { nephele } from 'src/deps'
import { connectionUrl } from 'src/setup-connect/connection-url'

const makeConfig = () => ({
  'connector.class': 'io.confluent.connect.jdbc.JdbcSourceConnector',
  'tasks.max': 1,
  'connection.url': connectionUrl(),
  'connection.user': artemis.core.settings.getDatabaseUsername(),
  'connection.password': artemis.core.settings.getDatabasePassword(),
  'key.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'value.converter': 'org.apache.kafka.connect.json.JsonConverter',
  'key.converter.schemas.enable': false,
  'value.converter.schemas.enable': true,
  'transforms': 'createKey,extractKey',
  'transforms.createKey.type': 'org.apache.kafka.connect.transforms.ValueToKey',
  'transforms.createKey.fields': 'id',
  'transforms.extractKey.type': 'org.apache.kafka.connect.transforms.ExtractField$Key',
  'transforms.extractKey.field': 'id',
  'mode': 'timestamp+incrementing',
  'incrementing.column.name': 'id',
  'timestamp.column.name': 'updated_at',
  'query': 'select * from product',
  'topic.prefix': 'prutcommerce_product',
  'topic.creation.groups': 'compacted',
  'topic.creation.default.partitions': 1,
  'topic.creation.default.replication.factor': 1,
  'topic.creation.compacted.include': 'prutcommerce_product',
  'topic.creation.compacted.cleanup.policy': 'compact',
  'topic.creation.compacted.retention.ms': 5000,
  'poll.interval.ms': 1000,
  'validate.non.null': false,
})

export const createProductSource = async () => {
  const params = {
    name: 'artemis_product_source',
    config: makeConfig(),
    baseUrl: artemis.core.settings.getConnectUrl(),
  }

  await nephele.setupConnect.createConnector(params)
}
