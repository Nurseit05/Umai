import {useEffect, useState} from 'react'
import {getOffset} from '../helpers/pagination'
import {Counters} from '../models/counters.model'
import { useSearchParams } from 'next/navigation'

interface Pagination {
  limit: number
  offset: number
}

interface ResponseProps {
  count?: number
  next?: string
  previous?: string
  results: []
  counters?: Counters
  total?: number
  branch_count?: number
  cashier_count?: number
  company_count?: number
  transactions?: []
  frunze_transaction?: []
  transaction_status?: any
  branches?: any
  branch_amount?: number
}

type FetchProps = (
  params: Pagination
) => PromiseLike<{ data: ResponseProps }> | { data: any }

export const useTableData = (fetch: FetchProps, params: object = {}) => {
  const searchParams = useSearchParams()

  const currentPage = searchParams.get('currentPage') | '1';

  const pageSize = searchParams.get('pageSize') | '10';

  const [loading, setLoading] = useState(false)
  const [shouldUpdateData, setShouldUpdateData] = useState(false)

  const [tableParams, setTableParams] = useState<ResponseProps>({
    total: 0,
    results: [],
  })

  const setPageSize = (_pageSize: string | number) => {
    searchParams.set('pageSize', _pageSize as string)
    setSearchParams(searchParams)
  }

  const setCurrentPage = (page: string | number) => {
    searchParams.set('currentPage', page as string)
    setSearchParams(searchParams)
  }

  const loadData = async (queryParams: Pagination) => {
    setLoading(true)
    try {
      const {data} = await fetch({
        ...params,
        ...queryParams,
      })

      setTableParams({
        total: data.count,
        ...data,
      })
    } catch (e) {
    }
    setLoading(false)
  }

  useEffect(() => {
    loadData({
      limit: Number(pageSize),
      offset: getOffset(Number(currentPage), Number(pageSize)),
    })
  }, [...Object.values(params)])

  useEffect(() => {
    if (shouldUpdateData) {
      loadData({
        limit: Number(pageSize),
        offset: getOffset(Number(currentPage), Number(pageSize)),
      })

      setShouldUpdateData(false)
    }
  }, [shouldUpdateData])

  const handleTableChange = (pagination: any) => {
    const current =
      Number(pageSize) === pagination.pageSize ? pagination.current : 1

    loadData({
      limit: pagination?.pageSize,
      offset: getOffset(current, Number(pageSize)),
    })

    setTableParams({
      ...tableParams,
      total: pagination.total,
    })

    setCurrentPage(current)
    setPageSize(pagination.pageSize)
  }

  const reloadData = () => setShouldUpdateData(true)

  return {
    tableData: {...tableParams},
    loading,
    pagination: {
      total: tableParams.total  tableParams?.branch_amount,
      count: tableParams.count  tableParams?.branch_amount,
      current: Number(currentPage),
      pageSize: Number(pageSize),
    },
    handleTableChange,
    reloadData,
  }
}