import { artemis } from 'src'

const ENTITIES = Object.freeze([
  {
    id: 1,
    name: 'Fitness skates',
    quantity: 10,
    quantityUnit: 'piece'
  },
  {
    id: 2,
    name: 'Freestyle skates',
    quantity: 5,
    quantityUnit: 'piece',
  },
  {
    id: 3,
    name: 'Aggressive skates',
    quantity: 7,
    quantityUnit: 'piece',
  },
  {
    id: 4,
    name: 'Speed skates',
    quantity: 3,
    quantityUnit: 'piece',
  },
])

const getExistentEntities = () => artemis.core.db.entities()
  .product
  .findAll({ where: { id: ENTITIES.map(entity => entity.id) }, raw: true, paranoid: false })

const isMissing = existentEntities => desiredEntity => existentEntities
  .every(existentEntity => existentEntity.id !== desiredEntity.id)

export const up = async () => {
  const existent = await getExistentEntities()
  const missing = ENTITIES.filter(isMissing(existent))

  await artemis.core.db.entities().product.bulkCreate(missing)
}
