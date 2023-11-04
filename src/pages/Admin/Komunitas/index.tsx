import AdminLayout from '../../../components/layout/AdminLayout'
import styles from './komunitas.module.css'
import { Tab } from '@headlessui/react'
import classNames from 'classnames'
import TabContentMaggot from '@/components/fragments/Komunitas/BPMaggot'
import TabContentLimbah from '@/components/fragments/Komunitas/BPLimbah'

const Komunitas = () => {

    return (
        <AdminLayout>
            <div className={styles.container}>
                <div className={styles.containerTab}>
                    <Tab.Group>
                        <Tab.List className={styles.tabList}>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>TemanMaggot</Tab>
                            <Tab className={({selected})=>classNames(styles.tab, selected && styles.tabActive)}>TemanDaur</Tab>
                        </Tab.List>
                        <Tab.Panels className={styles.tabPanels}>
                            <Tab.Panel>
                                <TabContentMaggot/>
                            </Tab.Panel>

                            <Tab.Panel>
                                <TabContentLimbah/>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </AdminLayout>
    );
}

export default Komunitas;
