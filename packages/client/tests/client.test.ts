import { TonApiClient, ApiConfig } from '../src/client';
import fetchMock from 'jest-fetch-mock';
import { ta, taWithApiKey } from './utils/client';
import { JSONStringify } from './utils/jsonbig';
import { Address } from '@ton/core';
import { getAccounts } from './__mock__/services';

test('Client status test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await ta.utilities.status();
    expect(res).toBeDefined();

    fetchMock.disableMocks();
});

test('Client apiKey test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await taWithApiKey.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                Authorization: 'Bearer TEST_API_KEY'
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client apiKey missing test', async () => {
    fetchMock.enableMocks();

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io'
    };

    const localTa = new TonApiClient(config);
    const res = await localTa.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client fallback test', async () => {
    fetchMock.enableMocks();

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io'
    };

    const localTa = new TonApiClient(config);
    const res = await localTa.blockchain.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.not.objectContaining({
                Authorization: expect.anything()
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client x-tonapi-client header test', async () => {
    fetchMock.enableMocks();

    fetchMock.mockResponseOnce(
        JSONStringify({
            rest_online: true,
            indexing_latency: 8
        })
    );

    const res = await ta.utilities.status();
    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            headers: expect.objectContaining({
                'x-tonapi-client': expect.stringMatching(/^tonapi-js@/)
            })
        })
    );

    fetchMock.disableMocks();
});

test('Client custom fetch is called', async () => {
    fetchMock.enableMocks();
    const customFetch = jest.fn(
        (input: RequestInfo | URL, init?: RequestInit): Promise<Response> => {
            return fetch(input, init);
        }
    );

    const config: ApiConfig = {
        baseUrl: 'https://tonapi.io',
        fetch: customFetch
    };

    const ta = new TonApiClient(config);

    await ta.utilities.status();

    expect(customFetch).toHaveBeenCalled();
});

test('Client post method in fetch', async () => {
    fetchMock.enableMocks();

    const accountIds = [
        'UQCae11h9N5znylEPRjmuLYGvIwnxkcCw4zVW4BJjVASi5eL',
        'UQAW2nxA69WYdMr90utDmpeZFwvG4XYcc9iibAP5sZnlojRO'
    ];
    fetchMock.mockResponseOnce(getAccounts);

    const res = await ta.accounts.getAccounts({
        accountIds: accountIds.map(id => Address.parse(id))
    });

    expect(res).toBeDefined();

    expect(fetchMock).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
            method: 'POST'
        })
    );

    fetchMock.disableMocks();
});

test('Client resopnse type for schema outside component (with snace_case)', async () => {
    fetchMock.enableMocks();
    fetchMock.mockResponseOnce(
        JSONStringify({
            public_key: '9544d2cccdd17e06e27f14fd531f803378d27f64710fd6aadc418c53d0660ec6'
        })
    );
    const senderAddress = Address.parse('UQAQxxpzxmEVU0Lu8U0zNTxBzXIWPvo263TIN1OQM9YvxsnV');
    const res = await ta.accounts.getAccountPublicKey(senderAddress);

    expect(res).toBeDefined();
    expect(res.publicKey).toBe('9544d2cccdd17e06e27f14fd531f803378d27f64710fd6aadc418c53d0660ec6');
    fetchMock.disableMocks();
});
